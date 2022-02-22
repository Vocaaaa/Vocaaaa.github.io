const express = require("express");
const server = express();

const question = {
    description: "Vilken gummibjörnsfärg är godast?",
    answers: ["Röd", "Grön", "Gul", "Orange", "Vit"],
    class: ["red", "green", "yellow", "Orange", "white"]
};

server.use(express.static("public"));

server.get("/question", (req, res) => {
    res.send(question);
});

server.listen(3000, () => {
    console.log("Server started!");
});