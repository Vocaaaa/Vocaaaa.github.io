const users = document.getElementById("users");

fetch("http://localhost:3000/users", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(res=>res.json())
.then(data=>{
    for(items of data) {
        let userDiv = document.createElement("div");
        let name = document.createElement("h2");
        let email = document.createElement("h2");
        let password = document.createElement("h2");
        name.textContent = "Name: " + items.name
        email.textContent = `Email: ${items.email}` 
        password.textContent = `Password: ${items.password}` 
        userDiv.appendChild(name)
        userDiv.appendChild(email)
        userDiv.appendChild(password)
        users.appendChild(userDiv)
    }
})