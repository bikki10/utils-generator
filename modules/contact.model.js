const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
    name: {type: String, required: true},
    address: String,
    username: String,
    password: String,
    email: String,
    phone: Number,
});

module.exports = mongoose.model("Contact", contactSchema);