const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
    bookingType: {
        type: String,
        enum: ["SUIT", "ROOM"],
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    paymentMode: {
        type: String,
        default: "pending"
    }
});

module.exports = mongoose.model("user", userSchema);