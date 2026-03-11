function addTask(){

let input = document.getElementById("taskInput")
let taskText = input.value

if(taskText === ""){
return
}

let li = document.createElement("li")

li.innerHTML = `
${taskText}
<span class="delete" onclick="deleteTask(this)">X</span>
`

li.addEventListener("click", function(){
  li.classList.toggle("completed")
})

document.getElementById("taskList").appendChild(li)

input.value = ""

}

function deleteTask(element){
element.parentElement.remove()
}