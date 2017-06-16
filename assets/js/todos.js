var toDoList = document.getElementById('toDoList');

// add TO DO when key 'enter' is pressed
var taskInput = document.getElementById('taskInput');
taskInput.addEventListener("keyup", function(e){
	if(e.keyCode === 13){
		addTodo();
	}
});


// toggle form
var toggleForm = document.querySelector(".fa-plus");
toggleForm.addEventListener("click", function(){
	taskInput.classList.toggle("hiddenInput");
});

function addTodo(){
	// create TO DO
	var toDo = document.createElement("li");
	toDo.setAttribute("class", "toDo");
	toDo.addEventListener("click", function(){
		this.classList.toggle("toDoCompleted");
	});

	// TO DO text
	var toDoText = document.createElement("span");
	toDoText.textContent = taskInput.value;

	// TO DO delete
	var deleteButton = document.createElement("span");
	deleteButton.setAttribute("class", "deleteButton");
	var deleteIcon = document.createElement("i");
	deleteIcon.setAttribute("class", "fa fa-trash");
	deleteButton.addEventListener("click", function(){
		toDo.classList.add("toDoRemoved");
		setTimeout(function(){ toDo.parentNode.removeChild(toDo) }, 300);
	});

	// li -> delete button -> text
	toDoList.appendChild(toDo);
	toDo.appendChild(deleteButton);
	deleteButton.appendChild(deleteIcon);
	toDo.appendChild(toDoText);
}