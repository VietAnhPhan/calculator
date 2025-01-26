const container = document.querySelector(".container");
// const input = container.querySelector(".input");
// const inputBox = document.createElement("input");
// inputBox.setAttribute("type", "text");
// inputBox.placeholder = "0";
// input.append(inputBox);
const display = container.querySelector(".display");

const buttons = ["display", "AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
buttons.forEach(button => {
    switch (button) {
        case "display":
            const display = document.createElement("button");
            display.classList.add("display");
            display.textContent = "0";
            container.append(display);
            break;
        case "AC":
            const AC = document.createElement("button");
            AC.classList.add("AC");
            AC.textContent = "AC";
            container.append(AC);
            break;
        case "+/-":
            const sign = document.createElement("button");
            sign.classList.add("sign");
            sign.textContent = "+/-";
            container.append(sign);
            break;
        case "%":
            const percent = document.createElement("button");
            percent.classList.add("percent");
            percent.textContent = "%";
            container.append(percent);
            break;
        case "/":
            const operator = document.createElement("button");
            operator.classList.add("operator");
            operator.textContent = "/";
            container.append(operator);
            break;
        case "7":
            const operand7 = document.createElement("button");
            operand7.classList.add("operand");
            operand7.textContent = "7";
            container.append(operand7);
            break;
        case "8":
            const operand8 = document.createElement("button");
            operand8.classList.add("operand");
            operand8.textContent = "8";
            container.append(operand8);
            break;
        case "9":
            const operand9 = document.createElement("button");
            operand9.classList.add("operand");
            operand9.textContent = "9";
            container.append(operand9);
            break;
        case "*":
            const multiply = document.createElement("button");
            multiply.classList.add("operator");
            multiply.textContent = "*";
            container.append(multiply);
            break;
        case "4":
            const operand4 = document.createElement("button");
            operand4.classList.add("operand");
            operand4.textContent = "4";
            container.append(operand4);
            break;
        case "5":
            const operand5 = document.createElement("button");
            operand5.classList.add("operand");
            operand5.textContent = "5";
            container.append(operand5);
            break;
        case "6":
            const operand6 = document.createElement("button");
            operand6.classList.add("operand");
            operand6.textContent = "6";
            container.append(operand6);
            break;
        case "-":
            const substract = document.createElement("button");
            substract.classList.add("operator");
            substract.textContent = "-";
            container.append(substract);
            break;
        case "1":
            const operand1 = document.createElement("button");
            operand1.classList.add("operand");
            operand1.textContent = "1";
            container.append(operand1);
            break;
        case "2":
            const operand2 = document.createElement("button");
            operand2.classList.add("operand");
            operand2.textContent = "2";
            container.append(operand2);
            break;
        case "3":
            const operand3 = document.createElement("button");
            operand3.classList.add("operand");
            operand3.textContent = "3";
            container.append(operand3);
            break;
        case "+":
            const add = document.createElement("button");
            add.classList.add("operator");
            add.textContent = "+";
            container.append(add);
            break;
        case "0":
            const operand0 = document.createElement("button");
            operand0.classList.add("zero");
            operand0.textContent = "0";
            container.append(operand0);
            break;
        case ".":
            const decimal = document.createElement("button");
            decimal.classList.add("decimal");
            decimal.textContent = ".";
            container.append(decimal);
            break;
        case "=":
            const equal = document.createElement("button");
            equal.classList.add("operator");
            equal.textContent = "=";
            container.append(equal);
            break;
        // const operand = container.querySelector(".operand");

    }
}
);
// const numbers = container.querySelector(".numbers")
// const operators = container.querySelector(".operators");

// let preInput = "", operatorChoice, nextInput = "";



// const hiddenOperators = ["=", "AC"];
// operatorCollection.forEach(operator => {
//     const operatorButton = document.createElement('button');
//     switch (operator) {
//         case '+':
//         case '-':
//         case 'x':
//         case '/':
//             operatorButton.addEventListener("click", saveOperator);
//             break;
//         case '=':
//             operatorButton.addEventListener("click", calculateOperands);
//             break;
//         case 'AC':
//             operatorButton.addEventListener("click", resetInputBox);
//             break;

//     }
//     operatorButton.classList.add("operator");
//     operatorButton.textContent = operator;

//     operators.append(operatorButton);
// });

// // hiddenOperators.forEach(item => {
// //     switch (item) {
// //         case 'AC':
// //             inputBox.addEventListener("click", resetInputBox);
// //             break;
// //     }
// // })

// for (let i = 0; i <= 9; i++) {
//     const number = document.createElement('button');
//     number.addEventListener("click", displayInput);
//     number.classList.add("number");
//     number.textContent = i;
//     numbers.append(number);
// }

// function displayInput(input) {
//     if (operatorChoice && !nextInput) {
//         inputBox.value = "";
//         nextInput += input.currentTarget.textContent;
//         inputBox.value = nextInput;
//         // nextInput = input.value;

//     } else if (nextInput) {
//         nextInput += input.currentTarget.textContent;
//         inputBox.value = nextInput;
//     }

//     else if (!operatorChoice) {
//         preInput = '';
//         if (input.currentTarget.textContent == '0') {
//             preInput = '';
//         } else {
//             preInput += input.currentTarget.textContent;

//         }
//         inputBox.value = preInput;

//     }

// }

// function calculateOperands() {
//     // nextInput = parseInt(inputBox.value);
//     preInput = preInput == '' ? 0 : parseFloat(preInput);
//     nextInput = nextInput == '' ? 1 : parseFloat(nextInput);

//     switch (operatorChoice) {
//         case '+':
//             preInput += nextInput;
//             inputBox.value = preInput;
//             nextInput = "";
//             operatorChoice = "";
//             break;
//         case '-':
//             preInput -= nextInput;
//             inputBox.value = preInput;
//             nextInput = "";
//             operatorChoice = "";
//             break;
//         case 'x':
//             preInput *= nextInput;
//             inputBox.value = preInput;
//             nextInput = "";
//             operatorChoice = "";
//             break;
//         case '/':
//             if (nextInput == 0) {
//                 preInput = "Lmao";
//                 inputBox.value = preInput;
//                 break;
//             }
//             preInput /= nextInput;
//             inputBox.value = preInput;
//             nextInput = "";
//             operatorChoice = "";
//             break;
//         case 'AC':
//             resetInputBox();
//             break;
//         default: break;;
//     }
// }
// function resetInputBox() {
//     inputBox.value = "";
//     preInput = "";
//     nextInput = "";
//     operatorChoice = "";
// }

// function saveOperator(operator) {
//     operatorChoice = operator.currentTarget.textContent;
// }

// console.log(calculateOperands(2, 0, '+'));
