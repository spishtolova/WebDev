function rollDice() {
    const number = document.getElementById("number").value;
    const result = document.getElementById("result");
    const images = document.getElementById("images");
    const values = [];
    const img = [];

    for (let i = 0; i < number; i++) {
        const num = Math.floor(Math.random() * 6) + 1;
        values.push(num); 
        img.push(`<img src="images/${num}.png" alt="Dice ${num}">`); 
    }

    result.textContent = `Dice values: ${values.join(", ")}`;
    images.innerHTML = img.join("");
}
