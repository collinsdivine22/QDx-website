const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Patient Schema and Model
const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  email: String,
  phone: String,
  address: String,
});

const Patient = mongoose.model('Patient', patientSchema);

// Route to register patient data
app.post('/register-patient', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to register patient' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
