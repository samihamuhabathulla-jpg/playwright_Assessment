import PromptSync  from "prompt-sync";
const prompt = PromptSync();
function reverseNumber(num:number){
    let rev=0;
    while (num>0){
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev ; 
}
 let input = Number(prompt("Enter five digit number : "));
 let result = reverseNumber(input);
 console.log("Reversed Number: ",result);