const express = require('express');
const validationRules = require('./middlewares/validation.middelware');

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello, World!' });
// });

app.post('/register',
    validationRules.registerValidationRules,
    (req, res) => {

    const { username,email } = req.body;

    res.status(200).json({ message: 'User registered successfully', user: { username, email } });


})


module.exports = app;

