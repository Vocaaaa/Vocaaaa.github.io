const express = require ("express");
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "../front-end")));

server.listen(5000);
