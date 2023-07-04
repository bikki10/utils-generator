const mongoose = require("mongoose");

// Create schema
const contactSchema = mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type:String, required: true},
    phone: {type: Number, required: true},
});

// Create model from schema
module.exports = mongoose.model("Contact", contactSchema);