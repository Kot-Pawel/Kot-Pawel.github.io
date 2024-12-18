// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, push, onValue, get, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBGA_bCJlEW7aA-5iIkv8JKIhr31pRF5F4",
    authDomain: "mealsuggestionapp.firebaseapp.com",
    databaseURL: "https://mealsuggestionapp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mealsuggestionapp",
    storageBucket: "mealsuggestionapp.firebasestorage.app",
    messagingSenderId: "535765538506",
    appId: "1:535765538506:web:b04bc924156b36fbf14633",
    measurementId: "G-YX32GCP9Q9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

// Centralized auth state monitoring
export function monitorAuthState(callback) {
    onAuthStateChanged(auth, (user) => {
        if (callback) callback(user);
    });
}

// Reusable DOM utilities
export function showElement(id, show = true) {
    const element = document.getElementById(id);
    if (element) element.style.display = show ? "block" : "none";
}

export function updateAuthStatus(user) {
    const authStatus = document.getElementById("authStatus");
    if (authStatus) {
        if (user) {
            authStatus.innerHTML = `Logged in as: ${user.email} <button id="logoutButton">Logout</button>`;
            const logoutButton = document.getElementById("logoutButton");
            logoutButton.addEventListener("click", async () => {
                try {
                    await signOut(auth);
                    alert("Logged out successfully!");
                } catch (error) {
                    console.error("Logout error:", error);
                    alert("Logout failed. Check console for details.");
                }
            });
        } else {
            authStatus.textContent = "Not logged in.";
        }
    }
}

// Function to log in
export async function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);        
    } catch (error) {
        console.error("Login error:", error);
        alert(`Login failed: ${error.message}`);
    }
}

// Function to log out
export async function logout() {
    try {
        await signOut(auth);
        alert("Logged out successfully!");
    } catch (error) {
        console.error("Logout error:", error);
        alert("Logout failed. Check console for details.");
    }
}
// Function to add meal to Firebase
export async function addMeal(event) {
    event.preventDefault(); // Prevent page reload

    const mealName = document.getElementById("mealName").value;
    const ingredients = document.getElementById("ingredients").value.split(",").map(item => item.trim());
    const link = document.getElementById("link").value;

    if (mealName && ingredients.length) {
        const newMeal = { name: mealName, ingredients, timesUsed: 0, link }; // Adding timesUsed with a default value of 0
        const mealsRef = ref(db, "meals");  
        try {
            const response = await push(mealsRef, newMeal);
            console.log("Meal added successfully:", response.key);
            alert("Meal added successfully!");
            document.getElementById("mealForm").reset();
        } catch (error) {
            console.error("Error adding meal:", error);
            alert("Failed to add meal. Check console for details.");
        }
    } else {
        alert("Please enter both a meal name and at least one ingredient.");
    }
}

// Fetch and display meals from Firebase
export function loadMeals() {
    const mealsList = document.getElementById("meals");
    const mealsRef = ref(db, "meals");

    console.log("Fetching meals from Firebase...");
    onValue(mealsRef, (snapshot) => {
        mealsList.innerHTML = ""; // Clear existing data
        const meals = snapshot.val();
        if (meals) {
            console.log("Meals fetched:", meals);

            // Convert meals object into an array and sort by name
            const sortedMeals = Object.entries(meals).sort(([, a], [, b]) => 
                a.name.localeCompare(b.name)
            );

            for (const [mealId, meal] of sortedMeals) {
                const li = document.createElement("li");
                li.classList.add("meal-item");

                // Meal name
                const mealName = document.createElement("div");
                mealName.classList.add("meal-name");
                mealName.textContent = meal.name;

                // Meal ingredients
                const mealIngredients = document.createElement("div");
                mealIngredients.classList.add("meal-ingredients");
                mealIngredients.textContent = `Ingredients: ${meal.ingredients.join(", ")}`;

                // Delete button
                const deleteButton = document.createElement("button");
                deleteButton.classList.add("delete-button");
                deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // Add trash icon
                deleteButton.addEventListener("click", () => {
                    if (confirm(`Are you sure you want to delete "${meal.name}"?`)) {
                        deleteMeal(mealId);
                    }
                });


                // Append elements to list item
                li.appendChild(mealName);
                li.appendChild(mealIngredients);
                
                // Recipe link
                if (meal.link && meal.link !== "none") {
                    const mealLink = document.createElement("a"); // Create an anchor element
                    mealLink.classList.add("meal-link"); // Add a CSS class for styling
                    mealLink.textContent = "Link to recipe"; // Set the display text
                    mealLink.href = meal.link; // Set the URL
                    mealLink.target = "_blank"; // Open the link in a new tab
                    mealLink.rel = "noopener noreferrer"; // Improve security for external links
                    li.appendChild(mealLink);                                                  
                    }             
                
                li.appendChild(deleteButton);  

                // Append list item to meals list
                mealsList.appendChild(li);
            }
        } else {
            console.log("No meals found.");
            mealsList.innerHTML = "<li>No meals available</li>";
        }
    }, (error) => {
        console.error("Error fetching meals:", error);
    });
}


export async function deleteMeal(mealId) {
    const mealRef = ref(db, `meals/${mealId}`);
    try {
        await remove(mealRef);
        alert("Meal deleted successfully!");
    } catch (error) {
        console.error("Error deleting meal:", error);
        alert("Failed to delete meal. Check console for details.");
    }
}


// Function to generate a random weekly meal plan
export async function generateWeeklyMeals() {
    try {
        const mealsRef = ref(db, "meals");
        const snapshot = await get(mealsRef);
        const meals = snapshot.val();

        if (!meals) {
            alert("No meals available to generate a weekly plan.");
            return;
        }

        const mealKeys = Object.keys(meals);
        if (mealKeys.length < 7) {
            alert("Not enough meals to generate a full week.");
            return;
        }

        const shuffledKeys = mealKeys.sort(() => 0.5 - Math.random()).slice(0, 7);
        const weeklyMeals = shuffledKeys.map(key => meals[key]);

        const weeklyMealsList = document.getElementById("weeklyMeals");
        weeklyMealsList.innerHTML = "";
        weeklyMealsList.style.display = "block";

        const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        weeklyMeals.forEach((meal, index) => {
            const li = document.createElement("li");
        
            // Add day and meal name
            const mealInfo = document.createElement("div");
            mealInfo.textContent = `${daysOfWeek[index]}: ${meal.name} (${meal.ingredients.join(", ")})`;
        
            // Add hyperlink if a valid link exists
            if (meal.link && meal.link !== "None") {
                const mealLink = document.createElement("a");
                mealLink.classList.add("meal-link");
                mealLink.textContent = "Link to recipe";
                mealLink.href = meal.link;
                mealLink.target = "_blank";
                mealLink.rel = "noopener noreferrer";
        
                // Append the link to the list item
                li.appendChild(mealInfo);
                li.appendChild(mealLink);
            } else {
                // Append just the meal info if no link is available
                li.appendChild(mealInfo);
            }
        
            // Append the list item to the weekly meals list
            weeklyMealsList.appendChild(li);
        });
        

    } catch (error) {
        console.error("Error generating weekly meals:", error);
        alert("Failed to generate weekly meals. Check console for details.");
    }
}

// Automatically monitor authentication state
monitorAuthState();

// Expose necessary functions globally
window.login = login;
window.logout = logout;
window.addMeal = addMeal;
window.loadMeals = loadMeals;
window.auth = auth;
window.onAuthStateChanged = onAuthStateChanged;
window.ref = ref;
window.get = get;
window.db = db;
window.generateWeeklyMeals = generateWeeklyMeals;