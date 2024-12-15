// Script for generating weekly meal suggestions (from index.html)
document.getElementById('suggest-meals')?.addEventListener('click', function() {
    fetch('https://kot-pawel-github-io.onrender.com/meals')
        .then(response => response.json())
        .then(data => {
            const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            const weekPlanContainer = document.getElementById('week-plan');
            weekPlanContainer.innerHTML = ''; // Clear previous content

            daysOfWeek.forEach(day => {
                const randomMeal = data[Math.floor(Math.random() * data.length)];

                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day');

                const dayName = document.createElement('div');
                dayName.classList.add('day-name');
                dayName.textContent = day;

                const mealName = document.createElement('div');
                mealName.classList.add('meal-name');
                mealName.textContent = randomMeal.name;

                const mealIngredients = document.createElement('div');
                mealIngredients.classList.add('meal-ingredients');
                mealIngredients.textContent = 'Ingredients: ' + randomMeal.ingredients.join(', ');

                dayDiv.appendChild(dayName);
                dayDiv.appendChild(mealName);
                dayDiv.appendChild(mealIngredients);

                weekPlanContainer.appendChild(dayDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching meal data:', error);
            document.getElementById('week-plan').innerHTML = '<div id="message">Failed to load meals. Please try again later.</div>';
        });
});

// Script for displaying all meals and handling deletions (from allMeals.html)
document.addEventListener('DOMContentLoaded', function() {
    const mealsList = document.getElementById('meals-list');
    if (!mealsList) return;

    fetch('https://kot-pawel-github-io.onrender.com/meals')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch meals');
            }
            return response.json();
        })
        .then(data => {
            mealsList.innerHTML = ''; // Clear loading text

            if (data.length === 0) {
                mealsList.innerHTML = '<p>No meals available.</p>';
                return;
            }

            data.forEach(meal => {
                const mealDiv = document.createElement('div');
                mealDiv.classList.add('day'); // Reusing the "day" style for each meal entry

                const mealName = document.createElement('div');
                mealName.classList.add('meal-name');

                // Add meal name and delete icon
                const mealNameText = document.createElement('span');
                mealNameText.textContent = meal.name;

                const deleteIcon = document.createElement('span');
                deleteIcon.innerHTML = '&#128465;'; // Unicode for bin icon
                deleteIcon.classList.add('delete-icon');
                deleteIcon.addEventListener('click', function() {
                    if (confirm(`Are you sure you want to delete "${meal.name}"?`)) {
                        fetch(`https://kot-pawel-github-io.onrender.com/delete-meal/${encodeURIComponent(meal.name)}`, {
                            method: 'DELETE'
                        })
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Failed to delete meal');
                            }
                            return response.json();
                        })
                        .then(result => {
                            alert(result.message);
                            location.reload(); // Reload the page to update the list
                        })
                        .catch(error => {
                            console.error('Error deleting meal:', error);
                            alert('Failed to delete meal. Please try again.');
                        });
                    }
                });

                mealName.appendChild(mealNameText);
                mealName.appendChild(deleteIcon);

                const mealIngredients = document.createElement('div');
                mealIngredients.classList.add('meal-ingredients');
                mealIngredients.textContent = 'Ingredients: ' + meal.ingredients.join(', ');

                mealDiv.appendChild(mealName);
                mealDiv.appendChild(mealIngredients);
                mealsList.appendChild(mealDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching meals:', error);
            mealsList.innerHTML = '<p>Failed to load meals. Please try again later.</p>';
        });
});

// Script for adding a new meal (from add_meal_ui.html)
document.getElementById('add-meal-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('meal-name').value;
    const ingredients = document.getElementById('meal-ingredients').value.split(',').map(ing => ing.trim());

    const newMeal = { name, ingredients };

    fetch('https://kot-pawel-github-io.onrender.com/add-meal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMeal)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('message').textContent = data.message;
        document.getElementById('add-meal-form').reset();
    })
    .catch(error => {
        console.error('Error adding meal:', error);
        document.getElementById('message').textContent = 'Failed to add meal. Please try again later.';
    });
});
