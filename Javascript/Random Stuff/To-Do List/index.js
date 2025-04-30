const input = document.getElementById("inputtext");
const tasks = document.getElementById("tasks");
const subtext = document.getElementById("warn");

function AddTask(){
    if(input.value == ""){ 
        subtext.textContent = "Please input a valid task!";
    }
    else{
        subtext.textContent = "";
        let task = document.createElement("li");
        task.innerHTML = input.value;
        tasks.appendChild(task);
        input.value = "";
        let del = document.createElement("span");
        del.innerHTML = "x";
        task.appendChild(del);

    }
}

tasks.addEventListener("click", (event) => {
    const clicked = event.target;


    if (clicked.tagName === "LI") {
        clicked.classList.toggle("checked");
    }

    // Remove parent <li> if a <span> is clicked
    if (clicked.tagName === "SPAN") {
        clicked.parentElement.remove();
    }
});

