const display =document.getElementById('display');
function clearDisplay(){
    display.value = "";
}
function deleteLast(){
    display.value = display.value.slice(0, -1);
}
function append(value){
    display.value += value;
}
function calculate(){
    const input = display.value
    if(input.includes("%")){
        display.value = parseFloat(input) / 100;
        return
    }
    let result = 0;
    if (input.includes("+")){
        const [num1, num2] = input.split("+").map(Number);
        result = num1 + num2;
    }else if (input.includes("-")){
        const [num1, num2] = input.split("-").map(Number);
        result = num1 - num2;
    }else if (input.includes("*")){
        const [num1, num2] = input.split("*").map(Number);
        result = num1 * num2;
    }else if (input.includes("/")){
        const [num1, num2] = input.split("/").map(Number);
        if(num2 === 0){
            display.value = "Error: Division by zero";
            return;
        }
        result = num1 / num2;
    }else{
        display.value = input;
        return;
    }
    display.value = result;
}