const express = require ("express");
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "../front-end")));
server.use(express.json());

server.post("/message", (req, res) => {
    console.log(req.body);
});

server.listen(5000);
