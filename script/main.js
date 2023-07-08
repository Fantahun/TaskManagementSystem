const inputTag = document.createElement("input")
const inputDiv = document.querySelector(".input-div")
const addTaskButton = document.querySelector(".add-btn")
const addBtn = document.createElement("i")
const delBtn = document.createElement("i")


addBtn.setAttribute("class", "fa-solid fa-plus")
delBtn.setAttribute("class", "fa-solid fa-trash")

addBtn.style = "color: red, margin-left: 20px"

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault()
inputDiv.append(inputTag)
inputDiv.append(addBtn)
inputDiv.append(delBtn)
})

