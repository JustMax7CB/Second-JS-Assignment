let increaseBtn = document.getElementById("btn-increase");
let decreaseBtn = document.getElementById("btn-decrease");
let resetBtn = document.getElementById("btn-reset");

let number = document.querySelector("h2")

increaseBtn.addEventListener("click", () => {
    number.innerHTML = Number(number.innerHTML) + 1
})

decreaseBtn.addEventListener("click", () => {
    number.innerHTML = Number(number.innerHTML) - 1
})

resetBtn.addEventListener("click", () => {
    number.innerHTML = 0
})