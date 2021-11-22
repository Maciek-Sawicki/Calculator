const ac = document.querySelector(".ac");
const backspace = document.querySelector(".backspace");
const output = document.querySelector(".output");
const aboveOutput = document.querySelector(".aboveOutput");
const numbers = document.querySelectorAll(".number");
const comma = document.querySelector(".comma");
const actions = document.querySelectorAll(".action");
const equals = document.querySelector(".equals");

const inputArray1 = [];
let inputArray2 = [];

ac.addEventListener("click", () => {
    inputArray1.splice(0, inputArray1.length);
    inputArray2.splice(0, inputArray2.length);
    output.textContent = "";
    aboveOutput.textContent ="";
});

backspace.addEventListener("click", () => {
    inputArray1.pop();
    console.log(inputArray1);
    output.textContent = inputArray1.join([separator = '']);
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (inputArray1.length < 8) {
            inputArray1.push(number.innerHTML);
            output.textContent += number.innerHTML;
        }
        console.log(inputArray1);
    })
});

comma.addEventListener("click", () => {
    if ((inputArray1.length < 8) && (inputArray1[inputArray1.length-1] != ".")) {
        inputArray1.push(".");
        output.textContent += ".";
    }
    console.log(inputArray1);
})

actions.forEach(action => {
    action.addEventListener("click", () => {
        let number1 = 0;
        console.log("ok");
        console.log(inputArray1);
        if ((inputArray1.length > 0) && (action.classList.contains("subtraction") == false)) {
            aboveOutput.textContent = `${inputArray1.join([separator = ''])} ${action.innerHTML}`;
            output.textContent = "";
            number1 = +inputArray1.join(""); 
            console.log(number1);
            inputArray1.splice(0, inputArray1.length);
            equals.addEventListener("click", () => {
                let number2 = +inputArray1.join(""); 
                let result = 0;
                output.textContent = "";
                aboveOutput.textContent = `${number1} ${action.innerHTML} ${number2}`;
                if (action.classList.contains("addition")) result = number1 + number2;
                if (action.classList.contains("subtraction")) result = number1 - number2;
                if (action.classList.contains("multiplication")) result = number1 * number2;
                if (action.classList.contains("division")) result = number1 / number2;
                output.textContent = result;
            })

        }
        else if (action.classList.contains("subtraction")) {
            if (inputArray1[0] != "-"){
                inputArray1.push("-");
                output.textContent += "-";
            }
            else {
                aboveOutput.textContent = `${inputArray1.join([separator = ''])} ${action.innerHTML}`;
                output.textContent = "";
                number1 = +inputArray1.join(""); 
                inputArray1.splice(0, inputArray1.length);
                equals.addEventListener("click", () => {
                    let number2 = +inputArray1.join(""); 
                    let result = 0;
                    output.textContent = "";
                    aboveOutput.textContent = `${number1} ${action.innerHTML} ${number2}`;
                    result = number1 - number2;
                    output.textContent = result;
                })
            }   
        }
    })
})


