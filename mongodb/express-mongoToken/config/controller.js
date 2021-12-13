const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index")
})
router.get("/signup", (req, res) => {
    res.render("register")
})
router.get("/login", (req, res) => {
    res.render("login")
})
router.post("/login", (req, res) => {
    //Login
})
router.post("/signup", (req, res) => {
    let {f_name, l_name, password1, password2, email, personID} = req.body
    let error = []
    if(!(f_name, l_name, password1, password2, email, personID)) {
        error.push({message: "Please fill out all fields"})
    }
    if(!(password1 === password2)) {
        error.push({messsage: "Passwords doesn't match"})
    }
    if(error.length > 0) {
        res.render("register", {
            error: error
        })
    }
    const hashedPassword = bcrypt.hashSync(password1, 10)
    console.log(hashedPassword);
    // Save to mongoDB
    res.redirect("/login")
})

module.exports = router