const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

//Cors for handling Render server
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Load meals from database.json
const DATABASE_PATH = './database.json';

// Helper to read and write to the database
function readDatabase() {
    return JSON.parse(fs.readFileSync(DATABASE_PATH, 'utf-8'));
}

function writeDatabase(data) {
    fs.writeFileSync(DATABASE_PATH, JSON.stringify(data, null, 2));
}

// Endpoint to add a new meal
app.post('/add-meal', (req, res) => {
    const newMeal = req.body;

    if (!newMeal.name || !newMeal.ingredients) {
        return res.status(400).json({ message: 'Invalid meal data.' });
    }

    const meals = readDatabase();
    meals.push(newMeal);
    writeDatabase(meals);

    res.status(201).json({ message: 'Meal added successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//endpoint to retrieve meals
app.get('/meals', (req, res) => {
    try {
        const meals = readDatabase();
        res.json(meals);
    } catch (error) {
        console.error('Error reading the database:', error);
        res.status(500).json({ message: 'Failed to load meals.' });
    }
});

// DELETE endpoint to remove a meal by name
app.delete('/delete-meal/:name', (req, res) => {
    const mealName = req.params.name;

    try {
        let meals = readDatabase();
        const initialLength = meals.length;

        // Filter out the meal to delete
        meals = meals.filter(meal => meal.name !== mealName);

        // Check if the meal was found and removed
        if (meals.length === initialLength) {
            return res.status(404).json({ message: `Meal with name "${mealName}" not found.` });
        }

        writeDatabase(meals);
        res.status(200).json({ message: `Meal "${mealName}" deleted successfully.` });
    } catch (error) {
        console.error('Error deleting meal:', error);
        res.status(500).json({ message: 'Failed to delete meal.' });
    }
});
