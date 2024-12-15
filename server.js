const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const admin = require('firebase-admin');
const firebase = require('firebase');

// Firebase Admin SDK for server-side access
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://mealsuggestionapp.firebaseio.com"
});

// Firebase client for client-side operations
const firebaseConfig = {
    apiKey: "AIzaSyBGA_bCJlEW7aA-5iIkv8JKIhr31pRF5F4",
    authDomain: "mealsuggestionapp.firebaseapp.com",
    projectId: "mealsuggestionapp",
    storageBucket: "mealsuggestionapp.firebasestorage.app",
    messagingSenderId: "535765538506",
    appId: "1:535765538506:web:b04bc924156b36fbf14633",
    measurementId: "G-YX32GCP9Q9"
  };

const db = admin.database();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
    const { name, ingredients } = req.body;

    db.ref('meals').push({ name, ingredients })
        .then(() => res.status(201).json({ message: 'Meal added successfully!' }))
        .catch(error => {
            console.error('Error adding meal:', error);
            res.status(500).json({ message: 'Failed to add meal.' });
        });
});


app.get('/meals', (req, res) => {
    db.ref('meals').once('value')
        .then(snapshot => {
            const meals = [];
            snapshot.forEach(childSnapshot => {
                meals.push({ id: childSnapshot.key, ...childSnapshot.val() });
            });
            res.json(meals);
        })
        .catch(error => {
            console.error('Error fetching meals:', error);
            res.status(500).json({ message: 'Failed to load meals.' });
        });
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
app.delete('/delete-meal/:id', (req, res) => {
    const mealId = req.params.id;

    db.ref(`meals/${mealId}`).remove()
        .then(() => res.json({ message: `Meal deleted successfully.` }))
        .catch(error => {
            console.error('Error deleting meal:', error);
            res.status(500).json({ message: 'Failed to delete meal.' });
        });
});

