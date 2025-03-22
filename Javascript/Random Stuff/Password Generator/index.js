function GeneratePassword(){
const passwordLenght = document.getElementById("size").value;
const includeLowercase = document.getElementById("lower");
const includeUppercase = document.getElementById("upper");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");
const result = document.getElementById("result");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?/";
let availableChars = "";
let password = "";

if(includeLowercase.checked){
availableChars += lowercaseChars;
}
if(includeUppercase.checked){
availableChars += uppercaseChars;
}
if(includeNumbers.checked){
availableChars += numberChars;
}
if(includeSymbols.checked){
availableChars += symbolChars;
}

if(passwordLenght <= 0 || !passwordLenght){
    result.textContent = "Please enter a valid lenght!";
    return;
}

if(availableChars == ""){
    result.textContent = "Please select at least one type of characters that will be included in your password!";
    return;
}

for( let i=0; i < passwordLenght; i++){
    const random = Math.floor(Math.random() * availableChars.length);
    password += availableChars[random];
}

result.textContent = password;
}