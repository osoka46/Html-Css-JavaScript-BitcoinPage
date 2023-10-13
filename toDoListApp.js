const form=document.getElementById("task-form");
const taskList=document.getElementById("task-list");



form.addEventListener("submit",(event)=>{
    event.preventDefault();

    //task values 
    const date=document.getElementById("task-date");
    const time=document.getElementById("task-time");
    const details=document.getElementById("task-details");



    const dateValue=date.value;
    const timeValue=time.value;
    const detailsValue=details.value;

    const task=document.createElement("div");
    task.className="task";

    const taskContent=document.createElement("span");
    taskContent.innerHTML=`Date:${dateValue} <br>Time:${timeValue} <br>Details:${detailsValue}`;
    const deleteBtn=document.createElement("span");
    deleteBtn.className="delete";
    deleteBtn.innerHTML="Delete";

    task.appendChild(taskContent);
    task.appendChild(deleteBtn);
    taskList.appendChild(task);

    deleteBtn.addEventListener("click",()=>{
        task.remove();
    })

    date.value="";
    time.value="";
    details.value="";
})
