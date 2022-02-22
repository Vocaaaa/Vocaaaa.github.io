const express = require("express");
const server = express();
server.use(express.static("public"));
let counter = 0;

server.get("/counter", (req, res) => {
    res.send({
        counter: counter
    });
});
server.post("/counter", (req, res) => {
    counter++;
    res.send({
        counter: counter
    });
});
server.listen(3000, () => {
    console.log("Server started!");
});