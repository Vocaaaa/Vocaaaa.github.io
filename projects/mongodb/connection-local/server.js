const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db");
const db = mongoose.connection

db.on("open", (err)=> {
    if(err)throw err
    console.log("Connected to Database");
});

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const Users = mongoose.model("usersModel", userSchema, "users");

const persons = {
    name: "Emilo",
    email: "mopotuning@jeppis.com",
    password: "animelover123"
}

const data = new Users({
    name: persons.name,
    email: persons.email,
    password: persons.password
})
data.save((err)=> {
    if(err)throw err
    console.log("Saved to Database");
});