require("dotenv").config();
const express = require("express");
const server = express();
const router = require("./config/controller");
const mongoose = require("mongoose");
const layout = require("express-ejs-layouts");

// Server settings
server.use(express.urlencoded({extended:false}));
server.use(express.json());
server.use(express.static("public"));
server.set("view engine", "ejs");
server.set("layout", "layouts/layout");
server.use(layout);
server.use("/", router);

// Mongoose connections
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.once("open", (err) => {
    if(err) throw err
    console.log("Database Connected");
});


server.listen(4000, (err) => {
    if (err) throw err
    console.log("Connected to web");
});