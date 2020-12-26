//Global vars
const todoInput = document.getElementById("todoInput");
const todoAdd = document.getElementById("addTodo");
const todoTasksArea = document.getElementById("todoTasks");


//getCurrentTime
function getCurrentTime(){
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    localStorage.setItem("time", dateTime);
}


// to check if localstorage is null or not  
let tasks;
if (localStorage.getItem("Tasks") === null) {
  tasks = [];
} else {
  tasks = JSON.parse(localStorage.getItem("Tasks"));
  displayTasks();
}

//to add tasks to local storage 
todoAdd.addEventListener("click", function () {
    getCurrentTime();
    let currentTime = localStorage.getItem("time")
    let task = {
        taskName :  todoInput.value,
        taskStatus: "" ,
        taskTime : currentTime
    } 
  tasks.push(task);
  localStorage.setItem("Tasks", JSON.stringify(tasks));
  console.log(tasks);
  displayTasks();
});

//to displayTasks from local storage 
function displayTasks() {
  let hasala = "";
  for (let i = 0; i < tasks.length; i++) {
    hasala += `
        <li class=" list-group-item list-group-item-action list-group-item-light mb-1 d-flex justify-content-between oneTask">
        <h5 class="text-dark ${tasks[i].taskStatus}">${tasks[i].taskName}</h5>
        <p>${tasks[i].taskTime}</p>
        <div>
          <button onclick ="checkedTask(${i})" class="btn btn-info"><i class="fas fa-clipboard-check"></i></button>
          <button onclick ="deleteTask(${i})" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
        </div>
        </li>
        `;
  }
  todoTasksArea.innerHTML = hasala;
}

//to displayTask from local storage and diplay updated tasks
function deleteTask(selectedTask){
    tasks.splice(selectedTask,1)
    localStorage.setItem("Tasks" , JSON.stringify(tasks));
    displayTasks();
}

//to to replace task status deom cheked or not  
function checkedTask(checked){
    if(tasks[checked].taskStatus == "checked")
    {
        tasks[checked].taskStatus = ""
    }
    else{
        tasks[checked].taskStatus = "checked"
    }
    
    localStorage.setItem("Tasks" , JSON.stringify(tasks));
    displayTasks();
} 



