require("dotenv").config();
const { urlencoded, Router } = require('express');
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;
//Knows to look for the itemController.js file
// const itemController = require("./controllers/itemController");

const mongoURI = process.env.MONGO_URI;

// app.use('/public',express.static(__dirname + '/public/'))
app.use(express.static("stylesheets"));
app.use(morgan('short'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// look for itemController
// app.use('/items', itemController);


app.listen(3001, ()=>{
    console.log("back-end port is running")
})