const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    personID: Number,
    password: String,
    stuff: {
        favoriteFood: String,
        favoriteMovie: String,
    }
})

module.exports = new mongoose.model("user", userSchema, "users")
