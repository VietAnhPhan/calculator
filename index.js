const container = document.querySelector(".container");
const input = container.querySelector(".input");
const numbers = container.querySelector(".numbers")
const operators = container.querySelector(".operators");
const operatorCollection = ["+", "-", "x", "/", "=", "AC"];
let preInput = "", operatorChoice, nextInput = "";
const inputBox = document.createElement("input");
inputBox.setAttribute("type", "text");
inputBox.placeholder = "0";
input.append(inputBox);


const hiddenOperators = ["=", "AC"];
operatorCollection.forEach(operator => {
    const operatorButton = document.createElement('button');
    switch (operator) {
        case '+':
        case '-':
        case 'x':
        case '/':
            operatorButton.addEventListener("click", saveOperator);
            break;
        case '=':
            operatorButton.addEventListener("click", calculateOperands);
            break;
        case 'AC':
            operatorButton.addEventListener("click", resetInputBox);
            break;

    }
    operatorButton.classList.add("operator");
    operatorButton.textContent = operator;

    operators.append(operatorButton);
});

// hiddenOperators.forEach(item => {
//     switch (item) {
//         case 'AC':
//             inputBox.addEventListener("click", resetInputBox);
//             break;
//     }
// })

for (let i = 0; i <= 9; i++) {
    const number = document.createElement('button');
    number.addEventListener("click", displayInput);
    number.classList.add("number");
    number.textContent = i;
    numbers.append(number);
}

function displayInput(input) {
    if (operatorChoice && !nextInput) {
        inputBox.value = "";
        nextInput += input.currentTarget.textContent;
        inputBox.value = nextInput;
        // nextInput = input.value;

    } else if (nextInput) {
        nextInput += input.currentTarget.textContent;
        inputBox.value = nextInput;
    }

    else if (!operatorChoice) {
        preInput = '';
        if (input.currentTarget.textContent == '0') {
            preInput = '';
        } else {
            preInput += input.currentTarget.textContent;

        }
        inputBox.value = preInput;

    }

}

function calculateOperands() {
    // nextInput = parseInt(inputBox.value);
    preInput = preInput == '' ? 0 : parseFloat(preInput);
    nextInput = nextInput == '' ? 1 : parseFloat(nextInput);

    switch (operatorChoice) {
        case '+':
            preInput += nextInput;
            inputBox.value = preInput;
            nextInput = "";
            operatorChoice = "";
            break;
        case '-':
            preInput -= nextInput;
            inputBox.value = preInput;
            nextInput = "";
            operatorChoice = "";
            break;
        case 'x':
            preInput *= nextInput;
            inputBox.value = preInput;
            nextInput = "";
            operatorChoice = "";
            break;
        case '/':
            if (nextInput == 0) {
                preInput = "Lmao";
                inputBox.value = preInput;
                break;
            }
            preInput /= nextInput;
            inputBox.value = preInput;
            nextInput = "";
            operatorChoice = "";
            break;
        case 'AC':
            resetInputBox();
            break;
        default: break;;
    }
}
function resetInputBox() {
    inputBox.value = "";
    preInput = "";
    nextInput = "";
    operatorChoice = "";
}

function saveOperator(operator) {
    operatorChoice = operator.currentTarget.textContent;
}

// console.log(calculateOperands(2, 0, '+'));
