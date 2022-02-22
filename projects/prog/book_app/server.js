const express = require('express');
const mongoose = require("mongoose");
const server = express();
server.use(express.static('public'));
server.set('view engine', 'ejs');
server.use(express.urlencoded({extended: true}));

// Database
mongoose.connect("mongodb://localhost:27017/db");
const db = mongoose.connection;
db.on("open", (err) => {
    if(err)throw err
    console.log("Connected to database");
})
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number
})
const Books = mongoose.model("book", bookSchema, "books" )


server.get('/', async (req, res)=>{
    const books = await Books.find()
    console.log(books);
    res.render('index', {
        books: books
    })
})

server.get("/deletebook", (req, res) => {
    res.sendFile(__dirname + "/public" + "/delete.html")
})

server.post("/delete", (req, res)=>{
    const deleteTitle = req.body.delete-title
    const deleteAuthor = req.body.delete-author
    const deletePages = req.body.delete-pages
    async function deleteBook() {
        const deletedBook = await Books.findOneAndDelete({title:deleteTitle, author:deleteAuthor, pages:deletePages})
        if(deleteBook){
            res.send("Book deleted")
        } else {
            res.send("Oops, something went wrong")
        }
    }
    deleteBook();
})

server.post("/addBook", (req, res) => {
    let {title, author, pages} = req.body
    let info = new Books({
        title: title,
        author: author,
        pages: pages
    })
    info.save((err) => {
        if(err)throw err
        console.log("Saved");
    })
    res.redirect("/")
})
server.listen(3000);