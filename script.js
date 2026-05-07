let body = document.querySelector("body");
let ul = document.querySelector("ul");

// Theme ======

let toggle = document.getElementById("toggle")
let themebtn = document.querySelector(".themebtn");
let circle = document.getElementById("circle");

// Slider ======

let slides = document.querySelectorAll(".slider img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");




toggle.addEventListener("click", () => {

    ul.classList.toggle("active");
})


// Theme ===========



let saveTheme = localStorage.getItem("theme");

if (saveTheme === "dark") {

    body.classList.add("dark");
    circle.innerHTML = `<i class="fa-solid fa-moon"></i>`
    ul.style.color = "black"
} else {

    body.classList.add("light");
    circle.innerHTML = `&#9728;`

}


themebtn.addEventListener("click", () => {


    if (body.classList.contains("light")) {

        body.classList.replace("light", "dark");
        circle.innerHTML = `<i class="fa-solid fa-moon"></i>`
        ul.style.color = "black"

        localStorage.setItem("theme", "dark");
    } else {

        body.classList.replace("dark", "light");
        circle.innerHTML = `&#9728;`


        localStorage.setItem("theme", "light");
    }
})


// Slider ======


let current = 0;
showSlide(current);

function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slides[index].style.display = "block"
}

next.addEventListener("click", () => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
})

prev.addEventListener("click", () => {
    current--;

    if (current < 0) {
        current = slides.length - 1;
    }

    showSlide(current);
})

setInterval(() => {
    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
}, 4000);


// Clock ======


function updateClock() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    let time = `${hours} : ${minutes} : ${seconds}`

    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = now.getDate();
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let year = now.getFullYear();

    date = date.toString().padStart(2, "0");


    let calender = `${day[now.getDay()]}  ${date}/${month[now.getMonth()]}`

    document.getElementById("clock").innerHTML = `
    <h1>${time}</h1>
    <p>${calender}</<p>
    `;

}
setInterval(updateClock, 1000)

updateClock();
