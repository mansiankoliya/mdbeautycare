const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const contact = mongoose.model('subscriber', contactSchema);
module.exports = contact
