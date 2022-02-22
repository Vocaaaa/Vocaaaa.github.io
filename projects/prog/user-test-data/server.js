const express = require("express");
const server = express();
server.use(express.static("public"));
const fs = require("fs");

let users = [];


server.use(express.urlencoded({extended:true}));
server.use(express.json());

server.post("/add", (req, res)=> {
    let data = req.body
    users.push(data);
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2))
    res.redirect("/")
});

server.get("/users", (req, res) => {
    let data = fs.readFileSync("users.json");
    res.json(JSON.parse(data));
});

server.listen(3000)