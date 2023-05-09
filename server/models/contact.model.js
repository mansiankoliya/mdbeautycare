const mongoose = require('mongoose');
console.log("contact model");
const contactSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        // required: true
    },
    Email: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: Number,
        required: true
    },
    Message: {
        type: String,
        required : true
    }

}, {
    timestamps: true
})

const contact = mongoose.model('contact', contactSchema);
module.exports = contact
