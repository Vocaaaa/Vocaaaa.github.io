const express = require("express");
const server = express();

server.post("/message", (req, res) => {
    document.write("bruh");
});

server.use(express.static("public"));
server.listen(2000, (err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("Connected");
    }
});