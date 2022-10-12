import cardArr from "../data/card.js"

const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("menu-active") 
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
})


const card = cardArr.card
console.log(cardArr);
const boxCard = document.querySelector('#card .container');
card.forEach((card, index) => {
boxCard.innerHTML += 
   `
        <div class="box-card">
            <div class="card-head">   
                <img src="${card.icon}">
            </div>
            <div class="card-body">
                <h3>${card.title}</h3>
                <p>${card.desc}</p>
            </div>
        </div>
    `
   
})

