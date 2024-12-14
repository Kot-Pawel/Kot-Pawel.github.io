const fs = require('fs');
const https = require('https');

const DATABASE_URL = 'https://kot-pawel-github-io.onrender.com/meals';
const LOCAL_PATH = './database.json';

https.get(DATABASE_URL, (res) => {
    let data = '';

    // Accumulate data chunks
    res.on('data', (chunk) => {
        data += chunk;
    });

    // Write to file once all data is received
    res.on('end', () => {
        try {
            const meals = JSON.parse(data);
            fs.writeFileSync(LOCAL_PATH, JSON.stringify(meals, null, 2));
            console.log('Database synced successfully!');
        } catch (err) {
            console.error('Error parsing or writing data:', err);
        }
    });
}).on('error', (err) => {
    console.error('Error fetching meals:', err);
});
