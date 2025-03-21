const number = document.getElementById("number");
const fahrenheit = document.getElementById("Fahrenheit")
const celsius = document.getElementById("Celsius");
let result = document.getElementById("result");
let temp;


function convert(){
if(fahrenheit.checked){
   temp = Number(number.value);
   temp = (temp * 9) / 5 + 32;
   result.textContent = temp.toFixed(2) + "°F"
}
else if(celsius.checked){
   temp = Number(number.value);
   temp = (temp - 32) * (5/9);
   result.textContent = temp.toFixed(2) + "°C"
}
else{
    result.textContent = "Select a unit";
}
}