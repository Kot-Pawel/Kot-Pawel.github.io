// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, push, onValue, get, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { set } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

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
            authStatus.innerHTML = `<button id="logoutButton" class = "logOutButton">Logout</button>`;
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
    event.preventDefault();
    const user = auth.currentUser;
    if (!user) {
        alert("You must be logged in to add meals.");
        return;
    }

    const mealName = document.getElementById("mealName").value;
    const ingredients = document.getElementById("ingredients").value.split(",").map(item => item.trim());
    const link = document.getElementById("link").value;
    const difficulty = document.getElementById("difficulty").value;

    if (mealName && ingredients.length) {
        const newMeal = { name: mealName, ingredients, timesUsed: 0, link, difficulty };
        const mealsRef = ref(db, `meals/${user.uid}`); // Save under user's UID

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
    const user = auth.currentUser; // Get the currently logged-in user

    if (!user) {
        alert("You must be logged in to view meals.");
        return;
    }

    const mealsRef = ref(db, `meals/${user.uid}`); // Reference meals under the user's UID

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
                deleteButton.innerHTML = '<img src="https://cdn-icons-png.freepik.com/512/8962/8962643.png" width=50% height=50%>'; // Add trash icon
                deleteButton.addEventListener("click", () => {
                    if (confirm(`Are you sure you want to delete "${meal.name}"?`)) {
                        deleteMeal(mealId); // Call deleteMeal with the specific meal ID
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

                // Add timesUsed to the meal list item
                const timesUsed = document.createElement("div");
                timesUsed.textContent = `Times used: ${meal.timesUsed || 0}`;
                li.appendChild(timesUsed);

                const difficulty = document.createElement("div");
                difficulty.textContent = `Difficulty: ${meal.difficulty || "n/a"}`;
                li.appendChild(difficulty);

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


//Function to delete a meal
export async function deleteMeal(mealId) {
    const user = auth.currentUser; // Get the currently logged-in user

    if (!user) {
        alert("You must be logged in to delete meals.");
        return;
    }

    const mealRef = ref(db, `meals/${user.uid}/${mealId}`); // Reference the meal under the user's UID

    try {
        await remove(mealRef); // Remove the meal
        alert("Meal deleted successfully!");
    } catch (error) {
        console.error("Error deleting meal:", error);
        alert("Failed to delete meal. Check console for details.");
    }
}

// Function to generate a random weekly meal plan
export async function generateWeeklyMeals() {
    try {
        const user = auth.currentUser; // Get the logged-in user

        if (!user) {
            alert("You must be logged in to generate a weekly meal plan.");
            return;
        }

        const mealsRef = ref(db, `meals/${user.uid}`); // Reference meals under the user's UID
        const snapshot = await get(mealsRef);
        const meals = snapshot.val();

        if (!meals) {
            alert("No meals available to generate a weekly plan.");
            return;
        }

        const mealEntries = Object.entries(meals);

        // Get number of office days from input field
        const officeDaysInput = document.getElementById("officeDaysInput");
        const includeOfficeDaysCheckbox = document.getElementById("includeOfficeDays");
        const isOfficeDaysIncluded = includeOfficeDaysCheckbox && includeOfficeDaysCheckbox.checked;
        const officeDaysCount = officeDaysInput ? parseInt(officeDaysInput.value, 10) : 0;

        if (isOfficeDaysIncluded && (isNaN(officeDaysCount) || officeDaysCount < 0 || officeDaysCount > 5)) {
            alert("Please enter a valid number of office days (0-5).");
            return;
        }

        const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const officeDays = Array(officeDaysCount).fill("Office day");
        const remainingDays = daysOfWeek.length - officeDaysCount;

        // Group meals by difficulty and sort by timesUsed (ascending)
        const hardMeals = mealEntries
            .filter(([, meal]) => meal.difficulty === "hard")
            .sort(([, a], [, b]) => (a.timesUsed || 0) - (b.timesUsed || 0));

        const easyMediumMeals = mealEntries
            .filter(([, meal]) => meal.difficulty === "easy" || meal.difficulty === "medium")
            .sort(([, a], [, b]) => (a.timesUsed || 0) - (b.timesUsed || 0));

        if (hardMeals.length < 2 || easyMediumMeals.length < (remainingDays - 2)) {
            alert("Not enough meals available to meet the criteria.");
            return;
        }

        // Select 2 hard meals with the least timesUsed
        const selectedHardMeals = hardMeals.slice(0, 2).map(([mealId, meal]) => ({ ...meal, id: mealId }));

        // Select the remaining easy/medium meals with the least timesUsed
        const selectedEasyMediumMeals = easyMediumMeals
            .slice(0, remainingDays - 2)
            .map(([mealId, meal]) => ({ ...meal, id: mealId }));

        const weeklyMealsList = document.getElementById("weeklyMeals");
        weeklyMealsList.innerHTML = "";
        weeklyMealsList.style.display = "block";

        // Combine office days and selected meals into the final meal plan
        const finalMealPlan = [...officeDays, ...selectedHardMeals, ...selectedEasyMediumMeals];

        for (let i = 0; i < finalMealPlan.length; i++) {
            const meal = finalMealPlan[i];
            const li = document.createElement("li");

            if (meal === "Office day") {
                // Handle Office Day entries
                const mealInfo = document.createElement("div");
                mealInfo.textContent = `${daysOfWeek[i]}: Office day`;
                li.appendChild(mealInfo);
            } else {
                // Increment timesUsed for the meal
                await incrementTimesUsed(meal.id);

                // Add day and meal name
                const mealInfo = document.createElement("div");
                mealInfo.textContent = `${daysOfWeek[i]}: ${meal.name} (${meal.ingredients.join(", ")})`;
                li.appendChild(mealInfo);
                const mealDifficulty = document.createElement("div");
                mealDifficulty.textContent = `Difficulty: ${meal.difficulty}`;
                li.appendChild(mealDifficulty);
                const timesUsedDisplay = document.createElement("div");
                timesUsedDisplay.textContent = `Times used: ${meal.timesUsed}`;
                li.appendChild(timesUsedDisplay);

                // Add hyperlink if a valid link exists
                if (meal.link && meal.link !== "None") {
                    const mealLink = document.createElement("a");
                    mealLink.classList.add("meal-link");
                    mealLink.textContent = "Link to recipe";
                    mealLink.href = meal.link;
                    mealLink.target = "_blank";
                    mealLink.rel = "noopener noreferrer";

                    li.appendChild(mealLink);
                }
            }

            weeklyMealsList.appendChild(li);
        }
    } catch (error) {
        console.error("Error generating weekly meals:", error);
        alert("Failed to generate weekly meals. Check console for details.");
    }
}


//Function to increment timesUsed for meal
export async function incrementTimesUsed(mealId) {
    const user = auth.currentUser; // Get the currently logged-in user

    if (!user) {
        console.error("No user logged in. Cannot increment timesUsed.");
        return;
    }

    const mealRef = ref(db, `meals/${user.uid}/${mealId}/timesUsed`); // Reference the specific meal under the user's UID

    try {
        const snapshot = await get(mealRef);
        const currentCount = snapshot.exists() ? snapshot.val() : 0; // Get the current timesUsed value
        await set(mealRef, currentCount + 1); // Increment the value by 1
        console.log(`Incremented timesUsed for meal ${mealId}`);
    } catch (error) {
        console.error(`Failed to increment timesUsed for meal ${mealId}:`, error);
    }
}


//Function to include office days
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById('includeOfficeDays');
    if (checkbox) {
        checkbox.addEventListener('change', toggleInputField);
    }
});

function toggleInputField() {
    const checkbox = document.getElementById('includeOfficeDays');
    const inputField = document.getElementById('officeDays');
    if (checkbox.checked) {
        inputField.style.display = 'block'; // Show the input field
    } else {
        inputField.style.display = 'none'; // Hide the input field
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
