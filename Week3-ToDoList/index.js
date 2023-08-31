var inputbox = document.getElementById("input-box");

var all = document.getElementById("all");

var listcontainer = document.getElementById("listcontainer");
var completedlist = document.getElementById("completedlist");
var removedlist = document.getElementById("removedlist");

var completedbox = document.getElementById("completedtasks");
var total_tasks_box = document.getElementById("totaltasks"); 
var removedtasks = document.getElementById("removedtasks");

var remaining = document.getElementById("remaining");
var completed = document.getElementById("completed");

var ctasks = 0;
var total_tasks = 0;
var todolist = {};

function AddTask()
{
    if(inputbox.value == "")
    {
        document.getElementById("row").style="border:3px solid red;";
    }
    else
    {
        const li = document.createElement('li');
        li.innerHTML=inputbox.value;

        let span = document.createElement("span");
        span.innerHTML='\u00d7';

        li.appendChild(span);
        total_tasks_box.appendChild(li); 
        total_tasks = total_tasks+1;
    }

    inputbox.value="";
    remaining.innerHTML = total_tasks - ctasks;
    completed.innerHTML = ctasks;

    todolist["completed"] = completedbox.innerHTML;
    todolist["removed"] = removedtasks.innerHTML;
    todolist["onprocess"] = total_tasks_box.innerHTML;
    SaveData();
}

completedlist.addEventListener('click',function(e)
{
    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked");
        total_tasks_box.appendChild(e.target);      
            
    }
    else if(e.target.tagName == 'SPAN')
    {
        let val = e.target;
        // val.remove();
        e.target.parentElement.classList.toggle("checked");
        val.parentElement.classList.toggle("removedq");
        document.getElementById("removedtasks").style = "text-decoration:line-through";
        removedtasks.appendChild(val.parentElement);

    }

    todolist["completed"] = completedbox.innerHTML;
    todolist["removed"] = removedtasks.innerHTML;
    todolist["onprocess"] = total_tasks_box.innerHTML;
    SaveData();
},false);

listcontainer.addEventListener('click',function(e)
{
    if(e.target.tagName == "LI")
    {
        e.target.classList.toggle("checked");
        completedbox.appendChild(e.target);
    }
    else if(e.target.tagName == 'SPAN')
    {

        let val = e.target.parentElement;
        // val.remove();
        val.classList.toggle("removedq");
        document.getElementById("removedtasks").style = "text-decoration:line-through";
        removedtasks.appendChild(val);

    }


    todolist["completed"] = completedbox.innerHTML;
    todolist["removed"] = removedtasks.innerHTML;
    todolist["onprocess"] = total_tasks_box.innerHTML;
    SaveData();
    
},false);




function InputNormal()
{
    document.getElementById("row").style="border:0";
}

function update_tasknumber()
{
    total_tasks = document.getElementsByTagName("li").length;
    ctasks = document.getElementsByClassName("checked").length;
    remaining.innerHTML = total_tasks - ctasks - document.getElementsByClassName("removedq").length;
    completed.innerHTML = ctasks;
}
function SaveData()
{
    update_tasknumber();
    localStorage.setItem("todolist",JSON.stringify(todolist));
}

function ShowData()
{
    var todolist = localStorage.getItem("todolist");
    todolist = JSON.parse(todolist);
    completedbox.innerHTML = todolist["completed"];
    removedtasks.innerHTML = todolist["removed"];
    total_tasks_box.innerHTML = todolist["onprocess"];

    update_tasknumber();
}


ShowData();