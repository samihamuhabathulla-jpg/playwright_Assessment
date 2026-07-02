import promptSync from "prompt-sync";

const prompt = promptSync();

let num1 = Number(prompt("Enter first integer: "));
let num2 = Number(prompt("Enter second integer: "));
    console.log("Addition = " + (num1 + num2));
    console.log("Subtraction = " + (num1 - num2));
    console.log("Multiplication = " + (num1 * num2));
    console.log("Division="+(num1/num2));