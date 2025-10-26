const firstNumber = 0;
let var1 = null;
let var2 = null;
let ope = [];
let result = null;
const secondNumber = null;
const operator = null;
let screenContent = document.querySelector(".screen");
screenContent.innerText = "0";

getDotInput();
getPlusMinus();
getDigitsInput();
getOperator();




const add = function (a, b) {
    return a + b;

};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Division par zéro");
    }
}


function operate(operator, numberOne, numberTwo) {
    switch(operator) {
        case '+':
            return add(numberOne,numberTwo);
        case '-':
            return subtract(numberOne, numberTwo);
        case 'x':
            return multiply(numberOne,numberTwo);
        case '÷':
        case '/':
            return divide(numberOne,numberTwo);
        default:
            console.log("Error");
    }

}

function getOperator() {

    const operators = document.querySelectorAll(".operators button");
    let count = 0;
    
    operators.forEach(operator => {
        operator.addEventListener("click", function () {
            //screenContent.innerHTML += operator.textContent;
            console.log(operator.textContent);
            
            ope.push(operator.innerText);
            

            if (count < 1) {
                var1 = parseFloat(screenContent.innerText);
                console.log("var1 = " + var1);
                screenContent.innerText = "";
                count++;
            } else {
                var2 = parseFloat(screenContent.innerText);
                result = operate(ope[0],var1,var2);
                screenContent.innerText = result;
                console.log(result);
                var1 = result;
                console.log("var2 = " + var2);
                count++;
                var2 = null;
                ope.shift();
                //screenContent.innerHTML = "";
            }
            
            
            
            return operator.textContent;

        })
    })
}


function getDigitsInput() {

    const digits = document.querySelectorAll(".digits button");
    console.log("There are", digits.length, "buttons")
    digits.forEach(digit => {
        digit.addEventListener("click", function () {
            console.log(digit.textContent);
            if (screenContent.innerText === "0") {
                screenContent.innerText = digit.textContent;
            } else if (screenContent.innerText == result) {
                screenContent.innerText = digit.textContent;
            } else {
                screenContent.innerText += digit.textContent;
            }
        });
    });
}

function getDigitsInsideInput() {

    const digits = document.querySelectorAll(".digits button");
    screenContent.innerHTML == "";
    console.log("There are", digits.length, "buttons")
    digits.forEach(digit => {
        digit.addEventListener("click", function () {
            console.log(digit.textContent);
                screenContent.innerHTML += digit.textContent;
            return parseInt(digit.textContent);
        });
    });
}

function getDotInput() {

    const dot = document.querySelector(".dot button");
    let count = 0;

    dot.addEventListener("click", function () {
        if (count < 1) {
            screenContent.innerText += dot.textContent;
            count++;
            return dot.textContent;
           
        } else {
            console.log("une seule virgule svp");
        }
    })
}

function getPlusMinus() {
    const sign = document.querySelector(".sign");

    sign.addEventListener("click", function () {
        if (screenContent.innerText !== "0") { 
            if (screenContent.innerText[0] !== "-") {
                screenContent.innerText = "-" + screenContent.innerText;
            } else {
                screenContent.innerText = screenContent.innerText.slice(1);
            }
        } 

        })
}