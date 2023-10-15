const form=document.getElementById("task-form");
const taskList=document.getElementById("task-list");
const reset=document.getElementById("reset-input");


form.addEventListener('submit',(event)=>{
    
    const date=document.getElementById("task-date");
    const time=document.getElementById("task-time");
    const details=document.getElementById("text-area");

    

    const taskContent=document.createElement("span");
    taskContent.innerHTML=`Date: ${date.value} <br> Time: ${time.value} <br> Details: ${details.value}`;

    const task=document.createElement("div");
    task.className="task";
    
    task.appendChild(taskContent);
    
    //add delete btn

    const deleteBtn=document.createElement("span");
    deleteBtn.className="delete";
    deleteBtn.innerHTML="Delete";

    task.appendChild(deleteBtn);
    taskList.appendChild(task);

    deleteBtn.addEventListener('click',()=>{
        task.remove();
    })
  
    date.value="";
    time.value="";
    details.value="";
})
reset.addEventListener('submit',()=>{
    const date=document.getElementById("task-date").value="";
    const time=document.getElementById("task-time").value="";
    const details=document.getElementById("text-area").value="";
})