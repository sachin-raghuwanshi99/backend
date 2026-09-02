const {body, validationResult}  = require('express-validator');


async function validateResult(req, res, next) {
    const errors = validationResult(req);   

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }   

    next();
}

const registerValidationRules = [

    body('username')
        .notEmpty()
        .withMessage('Username is required')
        .isString()
        .withMessage('Username is required and must be a string')
        .isLength({ min: 3, max: 20 })
        .withMessage('Username must be between 3 and 20 characters'),

    body('email')
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Email must be a valid email address'),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    validateResult
]

module.exports = {
    registerValidationRules
}