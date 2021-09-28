const express = require("express");
const server = express();

server.use(express.static("public"));
server.listen(4000, (err)=>{
    if(err) {
        console.log(err);
    } else {
        console.log("Connected");
    }
});