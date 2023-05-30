require("dotenv").config()

const mongoose = require("mongoose");

const url = process.env.MONGODB_URI

console.log(url)

async function connectDB() {
    try {
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log("connected to database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectDB;