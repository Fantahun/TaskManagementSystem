/*              TODOS
- make the editable lables max character as of the input box
- make the label strike through when the ckeckbox is ticked or the label itself is clicked
-
- add a logic on the edit and delete buttons
- handle the number of tasks added and show on the screen
- handle the delete confirmation


*/

let tasksCountDisplay = document.querySelector('#tasksCountDisplay');
let taskInput = document.querySelector("#task_input");
let addTaskBtn = document.querySelector("#add_task");
let tasksContainer = document.querySelector(".list_container"); // ul
let tasks = document.querySelector(".lists"); //li
let tasksCount= 3; //because i add 3 template tasks - it will be handled later

tasksCountDisplay.textContent = `(${tasksCount} Left)`


addTaskBtn.addEventListener("click", ()=>{

    let idNumber = 1
    let newTask = taskInput.value;
    if(newTask !==''){   
        // console.log(newTask)
        
        let li = document.createElement("li")
        li.setAttribute("class","list")
        
        
        let taskSpan = document.createElement("span")
        taskSpan.setAttribute("class","task_content")
        let taskButtons = document.createElement("span")
        taskButtons.setAttribute("class","task_buttons")
        
        let editBtn = document.createElement("button")
        editBtn.textContent="Edit"

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent="Delete"

        taskButtons.append(editBtn,deleteBtn)     

        let checkBox = document.createElement("input")
        checkBox.setAttribute("type","checkbox")

        let taskLable = document.createElement("label")
        taskLable.textContent=newTask;
        
        taskSpan.appendChild(checkBox)
        taskSpan.appendChild(taskLable)


        
        li.appendChild(taskSpan)
        li.appendChild(taskButtons)
        // li.appendChild(taskLable)

        tasksContainer.appendChild(li)
        tasksCount +=1; // increase no of tasks by one when a task is added
        console.log(tasksCount)
        console.log(li)

        taskInput.value=""; // clear the input field after its saved
        tasksCountDisplay.textContent = `(${tasksCount} Left)`

    }
    else{
        alert("Please add a task")
    }
})



const checkbox = document.querySelector("input[type='checkbox']");

// Add event listener to detect checkbox state change
checkbox.addEventListener("change", function() {
  if (this.checked) {
    // Checkbox is checked, execute logic
    console.log("Checkbox is checked");
    // Add your logic here
  } else {
    // Checkbox is not checked, execute logic
    console.log("Checkbox is not checked");
    // Add your logic here
  }
});

// Get the "Edit" buttons and add event listeners
const editButtons = document.querySelectorAll('.task_buttons button:first-child');
editButtons.forEach((button) => {
button.addEventListener('click', handleEdit);
});

// Get the "delete" buttons and add event listeners
const deleteButtons = document.querySelectorAll('.task_buttons button:last-child');
deleteButtons.forEach((button) => {
button.addEventListener('click', handleDelete);
});

function handleEdit(event) {
    const label = event.target.parentElement.previousElementSibling.querySelector('label');
    label.setAttribute ("contenteditable","true");
    label.focus();
}


function handleDelete(event) {
  alert("delete button is clicked")
const listItem = event.target.closest('.list')
let deleteChoice = window.confirm(`Are you sure you want to delete this task?`)
if (deleteChoice == true) {
  
  listItem.remove();
  tasksCount -=1;
  tasksCountDisplay.textContent = `(${tasksCount} Left)`

} else {
  console.log("Task is not deleted.")

}
}


