const User = require("../models/User");
require('dotenv').config();
// Signup route Handler
exports.createUser = async (req, res) => {
    try {
        // Get data
        const { startDate, endDate, bookingType, name, email, phone, paymentMode } = req.body;

        // Create entry in database
        const user = await User.create({
            startDate, endDate, bookingType, name, email, phone, paymentMode
        });

        return res.status(200).json({
            success: true,
            message: "User Created Successfully"
        })

    }
    catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "User is not created"
        });
    }
}

