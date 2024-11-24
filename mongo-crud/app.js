// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/examRegistration', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Define a schema
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    class: String,
    branch: String,
    semester: Number,
    hallticket: String,
    examdate: Date,
    address: String
});

// Create a model
const Student = mongoose.model('Student', studentSchema);

// Routes

// Create a new student
app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    try {
        await student.save();
        res.send(student);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get all students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.send(students);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get a student by ID
app.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).send('Student not found');
        res.send(student);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Update a student by ID
app.put('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!student) return res.status(404).send('Student not found');
        res.send(student);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Delete a student by ID
app.delete('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).send('Student not found');
        res.send(student);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
