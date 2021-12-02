const express = require("express");
const server = express();
const mongoose = require("mongoose");
server.use(express.static("public"));

mongoose.connect("mongodb+srv://test:optima123@cluster0.ex0bg.mongodb.net/db");
const db = mongoose.connection

db.on("open", (err)=> {
    if(err)throw err
    console.log("Connected to Database");
});

const userSchema = mongoose.Schema({
    message: String
});
const Message = mongoose.model("usersModel", userSchema, "message");

server.post("/message", (req, res) => {
    const message = req.body.message
    let data = new Message ({
        message: message
    })
    data.save((err)=>{
        if(err){
            console.log(err);
        }
        console.log("Saved");
    });
    res.redirect("/")
})

server.get("/messages", (req, res) => {
    res.sendFile(__dirname + "/public" + "/messages.html")
})

server.listen(3000)