const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const resetbtn = document.querySelector(".reset");
let number = document.querySelector(".number");

let value = 0;

plusBtn.addEventListener("click", (add));
minusBtn.addEventListener("click", (minus));
resetbtn.addEventListener("click", (reset));

function add() {
    number.innerHTML = value;
    value++;
}

function minus() {
    value--;
    number.innerHTML = value;
}

function reset() {
    value = 0;
    number.innerHTML = 0;
}



const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: "1000",
};

ScrollReveal().reveal(".counter", {
    delay: 500,
});

ScrollReveal().reveal(".counter-number", {
    delay: 800,
});

ScrollReveal().reveal(".minus", {
    delay: 1000,
});

ScrollReveal().reveal(".reset", {
    delay: 1300,
});

ScrollReveal().reveal(".plus", {
    delay: 1600,
});
