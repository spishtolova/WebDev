const min = 1;
const max = 100;
let attempts = 0;
const num = Math.floor(Math.random() * (max - min + 1))
let numText = document.getElementById("header");
let subText = document.getElementById("subtext");
let submit = document.getElementById("submit");
let number = document.getElementById("number");
let guesses = document.getElementById("guesses");


numText.textContent = `Guess a Number between ${min} - ${max}`


submit.addEventListener("click" , () => {

const guess = Number(number.value);
attempts++;
if (guess == NaN || number.value == "") {
    subText.textContent = "Please enter a valid number!";
    return;
}
if(guess>num){
    subText.textContent = "Too high, try again!";
}
else if(guess<num){
    subText.textContent = "Too low, try again!";
}
else if(guess==num){
    subText.textContent = "CONGRATS! You win!" 
    guesses.textContent = `You guessed the number in ${attempts} attempts!`;
}
})