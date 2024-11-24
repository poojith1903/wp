// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the registration form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Form Data:', formData);
    res.send('Form submitted successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
