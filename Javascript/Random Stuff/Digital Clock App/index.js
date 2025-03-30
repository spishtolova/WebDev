function update(){
const time = new Date();
const hours = time.getHours().toString().padStart(2, 0);
const minutes = time.getMinutes().toString().padStart(2, 0);
const seconds = time.getSeconds().toString().padStart(2, 0);
const display = `${hours}:${minutes}:${seconds}`;
document.getElementById("clock").textContent = display;
}

update();
setInterval(update, 1000);