const birthDay =  2003;
userAge = 2022- birthDay;
console.log(birthDay);
console.log(userAge);
const age2 = userAge + 56;
console.log(age2);

switch (userAge) {
    case 18:
        console.log("you can enter the group!");
        break;

    case 19:
        console.log("you can enter the group!");
        break;

    case 20:
        console.log("you can enter the group!");
        break; 

    default:
        console.log("you can not enter the group!");
        break;
}


const number1 = +prompt("please enter the first number!");
const operator = prompt("please enter the operator");
const number2 = +prompt("please enter the second number!");
let result = 0;

switch (operator) {
    case "+":
        result = number1 + number2
        break;

    case "-":
        result = number1 - number2
        break;

    case "*":
        result = number1 * number2
        break;

    case "/":
        result = number1 / number2
        break;

    default:000
        break;
}

console.log(number1);
console.log(operator);
console.log(number2);
console.log(result);




 


