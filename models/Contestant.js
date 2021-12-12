const mongoose = require('mongoose');

const contestantSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 60,
    },
    guesses: {
        type: Number,
        required: true,
        default: 0,
    },
    sucessfulGuesses: {
        type: Number,
        required: true,
        default: 0,
    }
});

module.exports = mongoose.model('Contestant', contestantSchema);