const textInput = document.getElementById("textInput");
const taskBtn = document.getElementById("taskBtn");
const listContainer = document.getElementById("listContainer");

taskBtn.addEventListener("click", function(){

    const taskValue = textInput.value;

    const listItem = document.createElement("li");

    listItem.textContent = taskValue;

    listItem.style.color = "green";

    listItem.addEventListener("click", function(){
        listItem.remove();
    });

    listContainer.appendChild(listItem);

    textInput.value = "";
});