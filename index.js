const container = document.querySelector(".container");

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const buttons = ["display", "AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
buttons.forEach(button => {
    switch (button) {
        case "display":
            const display = document.createElement("div");
            display.classList.add("display");
            display.textContent = "0";
            container.append(display);
            break;
        case "AC":
            const AC = document.createElement("button");
            AC.classList.add("AC");
            AC.classList.add("red");
            AC.textContent = "AC";
            AC.addEventListener("click", resetCalculator);
            container.append(AC);
            break;
        case "+/-":
            const sign = document.createElement("button");
            sign.classList.add("sign");
            sign.classList.add("dodgerblue");
            sign.textContent = "+/-";
            sign.addEventListener("click", addSign);
            container.append(sign);
            break;
        case "%":
            const percent = document.createElement("button");
            percent.classList.add("percent");
            percent.classList.add("dodgerblue");
            percent.textContent = "%";
            percent.addEventListener("click", percentOperand)
            container.append(percent);
            break;
        case "/":
            const divide = document.createElement("button");
            divide.classList.add("operator");
            divide.classList.add("orange");

            divide.textContent = "/";
            divide.addEventListener("click", divideOperand);
            container.append(divide);
            break;
        case "7":
            const operand7 = document.createElement("button");
            operand7.classList.add("operand");
            operand7.classList.add("grey");
            operand7.textContent = "7";
            container.append(operand7);
            break;
        case "8":
            const operand8 = document.createElement("button");
            operand8.classList.add("operand");
            operand8.classList.add("grey");
            operand8.textContent = "8";
            container.append(operand8);
            break;
        case "9":
            const operand9 = document.createElement("button");
            operand9.classList.add("operand");
            operand9.classList.add("grey");
            operand9.textContent = "9";
            container.append(operand9);
            break;
        case "*":
            const multiply = document.createElement("button");
            multiply.classList.add("operator");
            multiply.classList.add("orange");
            multiply.textContent = "*";
            multiply.addEventListener("click", multiplyOperand);
            container.append(multiply);
            break;
        case "4":
            const operand4 = document.createElement("button");
            operand4.classList.add("operand");
            operand4.classList.add("grey");
            operand4.textContent = "4";
            container.append(operand4);
            break;
        case "5":
            const operand5 = document.createElement("button");
            operand5.classList.add("operand");
            operand5.classList.add("grey");
            operand5.textContent = "5";
            container.append(operand5);
            break;
        case "6":
            const operand6 = document.createElement("button");
            operand6.classList.add("operand");
            operand6.classList.add("grey");
            operand6.textContent = "6";
            container.append(operand6);
            break;
        case "-":
            const substract = document.createElement("button");
            substract.classList.add("operator");
            substract.classList.add("orange");
            substract.textContent = "-";
            substract.addEventListener("click", substractOperand);
            container.append(substract);
            break;
        case "1":
            const operand1 = document.createElement("button");
            operand1.classList.add("operand");
            operand1.classList.add("grey");
            operand1.textContent = "1";
            container.append(operand1);
            break;
        case "2":
            const operand2 = document.createElement("button");
            operand2.classList.add("operand");
            operand2.classList.add("grey");
            operand2.textContent = "2";
            container.append(operand2);
            break;
        case "3":
            const operand3 = document.createElement("button");
            operand3.classList.add("operand");
            operand3.classList.add("grey");
            operand3.textContent = "3";
            container.append(operand3);
            break;
        case "+":
            const add = document.createElement("button");
            add.classList.add("operator");
            add.classList.add("orange");
            add.textContent = "+";
            add.addEventListener("click", addOperand)
            container.append(add);
            break;
        case "0":
            const operand0 = document.createElement("button");
            operand0.classList.add("zero");
            operand0.classList.add("operand");
            operand0.classList.add("grey");
            operand0.textContent = "0";
            container.append(operand0);
            break;
        case ".":
            const decimal = document.createElement("button");
            decimal.classList.add("decimal");
            decimal.classList.add("grey");
            decimal.addEventListener("click", addDecimal);
            decimal.textContent = ".";
            container.append(decimal);
            break;
        case "=":
            const equal = document.createElement("button");
            equal.classList.add("operator");
            equal.classList.add("green-light");
            equal.classList.add("equal");
            equal.textContent = "=";
            equal.addEventListener("click", equalOperator);
            container.append(equal);
            break;
        // const operand = container.querySelector(".operand");

    }
}
);

const displayBox = container.querySelector(".display");
const operands = container.querySelectorAll(".operand");
let prevOperand, nextOperand, operator = ""

operands.forEach((item) => {
    item.addEventListener("click", display);
});


function display(event) {

    if (getDisplayBox() == "0" || (prevOperand && operator && (nextOperand == "" || !nextOperand))) {
        setDisplayBox("");
    }

    setDisplayBox(getDisplayBox() + event.currentTarget.textContent);

    if (!operator) {
        prevOperand = parseFloat(getDisplayBox());
    }

    else {
        nextOperand = parseFloat(getDisplayBox());
    }
}

function addOperand(event) {
    if (operator != null && operator != "" && prevOperand != null && prevOperand != "" && nextOperand != null && nextOperand != "") {
        prevOperand = prevOperand + nextOperand;
        setDisplayBox(prevOperand);
        resetNextOperand();
    }
    else {
        operator = event.currentTarget.textContent;
    }

}

function substractOperand(event) {
    if (operator != null && operator != "" && prevOperand != null && prevOperand != "" && nextOperand != null && nextOperand != "") {
        setDisplayBox(prevOperand - nextOperand);
        prevOperand = parseFloat(getDisplayBox());
        resetNextOperand();
    }

    operator = event.currentTarget.textContent;

}

function multiplyOperand(event) {
    if (operator != null && operator != "" && prevOperand != null && prevOperand != "" && nextOperand != null && nextOperand != "") {
        setDisplayBox(prevOperand * nextOperand);
        prevOperand = parseFloat(getDisplayBox());
        resetNextOperand();
    }

    operator = event.currentTarget.textContent;

}

function divideOperand(event) {
    if (parseInt(nextOperand) == 0) {
        setDisplayBox("LMAO");
        return;
    }
    if (operator != null && operator != "" && prevOperand != null && prevOperand != "" && nextOperand != null && nextOperand != "") {
        setDisplayBox(prevOperand / nextOperand);
        prevOperand = parseFloat(getDisplayBox());
        resetNextOperand();
    }

    operator = event.currentTarget.textContent;

}

function addSign() {
    if (!getDisplayBox().includes("-")) {
        setDisplayBox("-" + getDisplayBox())
        if (!nextOperand) {

            prevOperand = -1 * prevOperand;

        }
        else {
            nextOperand = -1 * nextOperand;

        }
    }
    else
        setDisplayBox(getDisplayBox().slice(1));
}

function equalOperator(event) {
    if (operator != null && operator != "" && prevOperand != null && prevOperand != "" && nextOperand != null && nextOperand != "") {
        switch (operator) {
            case "+":
                addOperand(event);
                break;
            case "-":
                substractOperand(event);
                break;
            case "*":
                multiplyOperand(event);
                break;
            case "/":
                divideOperand(event);
                break;
            case "%":
                percentOperand(event);
                break;
        }
    }
}

function percentOperand(event) {
    if (operator != null && operator != "" && prevOperand != null && prevOperand != "" && nextOperand != null && nextOperand != "") {
        setDisplayBox(prevOperand % nextOperand);
        prevOperand = parseFloat(getDisplayBox());
        resetNextOperand();
    }

    operator = event.currentTarget.textContent;
}

function addDecimal() {
    if (!getDisplayBox().includes(".")) {
        setDisplayBox(getDisplayBox() + ".");
    }
}

function resetCalculator() {
    resetPrevOperand();
    resetNextOperand();
    resetOperator();
    setDisplayBox("0");
}

function getDisplayBox() {
    return displayBox.textContent;
}

function setDisplayBox(input) {
    displayBox.textContent = input;
}

function resetPrevOperand() {
    prevOperand = ""
}

function resetNextOperand() {
    nextOperand = "";
}

function resetOperator() {
    operator = "";
}

