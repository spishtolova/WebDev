const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const count = document.getElementById("counter");

let counter = 0;

increase.onclick = function (){
    counter++;
    count.textContent = counter;
}

decrease.onclick = function () {
    counter--;
    count.textContent = counter;
};

reset.onclick = function(){
    counter = 0;
    count.textContent = counter;
}