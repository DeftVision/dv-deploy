const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    }

}, {timestamps: true});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;