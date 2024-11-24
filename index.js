const express = require("express");
const auth = require("./Routes/auth");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', function (request, response) {
    response.render('Landing/home', {
        title: "Home - AC Repair Shop",
        message: "Welcome to Pug with Express!"
    });
});

app.get('/services', function (request, response) {
    response.render('Landing/home', {
        title: "Home - AC Repair Shop",
        message: "Welcome to Pug with Express!"
    });
});

app.get('/about', function (request, response) {
    response.render('Landing/about', {
        title: "About Us - AC Repair Shop",
        message: "Welcome to Pug with Express!"
    });
});

app.get('/contact', function (request, response) {
    response.render('Landing/contact', {
        title: "Contact Us - AC Repair Shop",
        message: "Welcome to Pug with Express!"
    });
});

app.use("/auth", auth)

app.listen(PORT, function(){
    console.log(process.env,"::process.env")
    console.log(`Server start on: http://localhost:${PORT}`);
})