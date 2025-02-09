const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Trebuie introdus text.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//pentru atunci cand dau un task sa se adauge cand dau enter
inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();