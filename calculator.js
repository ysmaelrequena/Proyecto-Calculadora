//display//
let calculatorScreen = document.getElementById('numField');

//buttons//
const numButtons = document.querySelectorAll('.numButton');
const opButtons = document.querySelectorAll('.opButton');
const equalButton = document.querySelector('.equalButton');
const dotButton = document.querySelector('.decButton');
const deleteButton = document.querySelector('.deleteButton');
let firstNum = "";
let secondNum = "";
let operator = "";
let res = "";

//Numeric Button funtions//
numButtons.forEach(number => {
    number.addEventListener('click', () => {
        calculatorScreen.value += number.value;
    });
});
//Op button functions//
    opButtons.forEach(operatorButton => {
        operatorButton.addEventListener('click', () => {
            
            let clearDisplay = () => {
                calculatorScreen.value = "";
            };
            deleteButton.addEventListener('click', () => {
                if (firstNum === "" && secondNum === "") {
                    clearDisplay();
                } else if (firstNum >= "0" && secondNum == "") {
                    clearDisplay();
                    firstNum = "";
                    secondNum = "";
                } else {
                    clearDisplay();
                    firstNum = "";
                    secondNum = "";
                };
            });

            if (operatorButton.value === "+") {
                firstNum = calculatorScreen.value;
                clearDisplay()
                operator = "+";
            } else if (operatorButton.value === "-") {
                firstNum = calculatorScreen.value;
                clearDisplay()
                operator = "-";
            } else if (operatorButton.value === "*") {
                firstNum = calculatorScreen.value;
                clearDisplay()
                operator = "*";
            } else if (operatorButton.value === "/") {
                firstNum = calculatorScreen.value;
                clearDisplay() 
                operator = "/";
            }; 
        equalButton.addEventListener('click', () => {
             //Si el usuario apreta "=" sin un segundo valor//
             if (secondNum = "") {
                return firstNum;
            };
            //Operaciones//
            if (operator === "+") {
                secondNum = calculatorScreen.value;
                res = parseFloat(firstNum) + parseFloat(secondNum);
                clearDisplay();
                calculatorScreen.value = res;
            } else if (operator === "-") {
                secondNum = calculatorScreen.value;
                res = parseFloat(firstNum) - parseFloat(secondNum);
                clearDisplay();
                calculatorScreen.value = res;
            } else if (operator === "*") {
                secondNum = calculatorScreen.value;
                res = parseFloat(firstNum) * parseFloat(secondNum);
                clearDisplay();
                calculatorScreen.value = res;
            } else if (operator === "/") {
                secondNum = calculatorScreen.value;
                res = parseFloat(firstNum) / parseFloat(secondNum);
                clearDisplay();
                calculatorScreen.value = res;
            };
        });
    });
});
