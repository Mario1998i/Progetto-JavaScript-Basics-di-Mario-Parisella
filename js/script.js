// Recupera i contenitori dal DOM //
const counterContainer = document.querySelector(".counter-number");
const buttonsContainer = document.querySelector(".buttons");

// Creazione del numero iniziale e aggiunta al contenitore //
const numberDisplay = document.createElement("h1");
numberDisplay.className = "number";
numberDisplay.textContent = "0";
counterContainer.appendChild(numberDisplay);

// Creazione dei pulsanti //
const minusBtn = document.createElement("button");
minusBtn.className = "minus";
minusBtn.innerHTML = '<i class="bi bi-dash"></i>';

const resetBtn = document.createElement("button");
resetBtn.className = "reset";
resetBtn.innerHTML = '<i class="bi bi-arrow-repeat"></i>';

const plusBtn = document.createElement("button");
plusBtn.className = "plus";
plusBtn.innerHTML = '<i class="bi bi-plus"></i>';

// Aggiunta dei pulsanti al contenitore //
buttonsContainer.appendChild(minusBtn);
buttonsContainer.appendChild(resetBtn);
buttonsContainer.appendChild(plusBtn);


let value = 0;


// Eventi per i pulsanti
plusBtn.addEventListener("click", (add));
minusBtn.addEventListener("click", (minus));
resetBtn.addEventListener("click", (reset));

function add() {
    numberDisplay.innerHTML = value;
    value++;
}

function minus() {
    value--;
    numberDisplay.innerHTML = value;
}

function reset() {
    value = 0;
    numberDisplay.innerHTML = 0;
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
