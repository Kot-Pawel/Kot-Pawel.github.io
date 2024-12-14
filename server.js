const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

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

    if (!newMeal.name || !newMeal.ingredients || !newMeal.prep_time) {
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