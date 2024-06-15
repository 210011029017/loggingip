const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const logEntry = `${new Date().toISOString()} - IP: ${ip}\n`;

    // Log the IP address to a file
    fs.appendFile('ip-log.txt', logEntry, (err) => {
        if (err) throw err;
    });

    // Respond with a message or redirect to another page
    res.send('Your IP address has been logged.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
