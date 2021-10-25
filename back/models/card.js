const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true,
    },
    data: {
        dateActive: {
            type: String,
            // required: true,
        },
        dateRegister: {
            type: String,
            // required: true,
        }
    }
})
module.exports = mongoose.model('card', cardSchema);
