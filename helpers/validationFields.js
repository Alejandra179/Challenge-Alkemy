
const { validationResult } = require('express-validator');

const validationFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorsTotal = { errors: errors.array() }

        return res.status(400).json(errorsTotal.errors[0]);
    }

    next();
}


module.exports = validationFields;