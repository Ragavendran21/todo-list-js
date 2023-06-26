window.addEventListener('load',() =>{
   let obj = {
    name:"Ragavendran"
   }
   localStorage.setItem("obj",obj);
   console.log(obj)
   let myobj = JSON.stringify(obj)
    const form  = document.querySelector("#new-task-form");
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
   form.addEventListener('submit',(e) =>{
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert("Please add Task");
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("task");
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);
        
        task_input_el = document.createElement("input");
        task_input_el.classList.add("task-text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");
        
        task_content_el.appendChild(task_input_el);
       
        list_el.appendChild(task_el);
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
        const task_action_edit = document.createElement("button");
        task_action_edit.classList.add("edit");
        const task_actions_del = document.createElement("button");
        task_actions_del.classList.add("delete");
        task_action_edit.innerHTML = "edit";
        task_actions_del.innerHTML ="delete";
        task_actions_el.appendChild(task_action_edit);
        task_actions_el.appendChild(task_actions_del);
        task_el.appendChild(task_actions_el);
        input.value="";
        task_action_edit.addEventListener('click',()=>{
            if(task_action_edit.innerText.toLowerCase() == "edit"){
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_action_edit.innerText = "Save";
            }else{
                task_input_el.setAttribute("readonly","readonly");
                task_action_edit.innerText = "Edit";
            }
        });
        task_actions_del.addEventListener('click',()=>{
            list_el.removeChild(task_el)
        })
       
   })
})