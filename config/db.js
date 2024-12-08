const mongoose = require("mongoose")
require('dotenv').config()

const mongodbConnect = async() => {
    try {
        const mongodbLink = process.env.MONGODB_LINK;
        mongoose.connect(mongodbLink);
        console.log("Database connected successfully.");
    } catch (error) {
        console.log(`Error to connect database. ${error}`);
    }
}

module.exports = mongodbConnect