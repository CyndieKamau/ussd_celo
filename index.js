require("./service");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require("express");
require("dotenv").config()
const connectDB = require("./config")
const port= process.env.PORT

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())   // cookie parser
app.use(cors())           // enable CORS

// routes
const ussdRoute = require('./ussd.route')

app.use('/', ussdRoute)

app.listen(port, () => {
    console.log("server listening at port", port)
    connectDB()
})