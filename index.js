const express = require("express");
const authRoutes = require("./routes/auth");
const mongodbConnect = require("./config/db");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use("/api/auth/", authRoutes)

app.listen(PORT, function () {
    mongodbConnect();
    console.log(`Server start on: http://localhost:${PORT}`);
})