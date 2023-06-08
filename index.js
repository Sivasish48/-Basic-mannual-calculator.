let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let resEl = document.getElementById("res-el");

function add(){
    let result = num1 + num2;
    resEl.textContent = "Result: " + result ;
}

function substract(){
    let result = num1 - num2;
    resEl.textContent = "Result: " + result ;
}

function multiply(){
    let result = num1 * num2;
    resEl.textContent = "Result: " + result ;
}

function divide(){
    let result = num1 / num2;
    resEl.textContent = "Result: " + result ;
}

