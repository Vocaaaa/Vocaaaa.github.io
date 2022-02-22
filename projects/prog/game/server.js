const express = require("express");
const fs = require("fs");
const server = express();

let a = 0;

server.get("/highscores", (req, res)=>{
    a++;
    res.send(a.toString());
});

server.use(express.static("public"));
server.listen(2000, (err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("Connected");
    }
});
