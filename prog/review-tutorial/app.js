const reviews = [
    {
        id: 1,
        name: "Karim Al-Rhashed",
        job: "UX Designer",
        img: "https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid libero mollitia quae. Eaque, laboriosam dignissimos ea dolores laborum voluptate unde?"

    },
    {
        id: 2,
        name: "Belly Duncan",
        job: "Web Designer",
        img: "https://media.istockphoto.com/photos/male-portrait-picture-id184372977?k=20&m=184372977&s=612x612&w=0&h=r5Wm0srluqts_8fTvxeqnSg5-Mh9hxJPxCyENRszWN8=",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid libero mollitia quae. Eaque, laboriosam dignissimos ea dolores laborum voluptate unde?"
        
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}