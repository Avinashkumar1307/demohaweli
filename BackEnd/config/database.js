const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("DATABASE Connected is Successfully")
    }).catch((err) => {
        console.log("DB connection issues");
        console.error(err);
        process.exit(1);
    })
}