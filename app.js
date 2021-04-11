function addToDoItem() {
  const container = document.querySelector(".to-do-list");
  const item = document.createElement("li");
  const toDoText = document.querySelector("#input-todo").value;

  // Adding To Do Item

  const toDo = document.createElement("input");
  toDo.value = toDoText;
  toDo.disabled = true;
  item.appendChild(toDo);
  toDo.classList.add("todo-text");

  // Adding Edit Button

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "<i class='fas fa-pencil-alt'></i>";
  editBtn.classList.add("delBtn");
  editBtn.setAttribute("id", "editBtn");
  editBtn.onclick = editToDo;

  // Adding Delete Button

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "<i class='fas fa-times'></i>";
  delBtn.classList.add("delBtn");
  delBtn.onclick = deleteToDo;

  item.appendChild(editBtn);
  item.appendChild(delBtn);
  item.classList.add("list-item");

  container.appendChild(item);
  document.querySelector("#input-todo").value = "";
}

function editToDo() {
  var toDoText = this.previousSibling;
  toDoText.disabled = false;
  toDoText.parentElement.style.backgroundColor = "#F0F0F0";
  toDoText.style.backgroundColor = "#F0F0F0"
  this.innerHTML = "<i class='far fa-save'></i>";
  this.style.backgroundColor = "green";
  this.onclick = saveToDo;
}

function saveToDo() {
  var toDoText = this.previousSibling;
  toDoText.disabled = true;
  toDoText.parentElement.style.backgroundColor = "white";
  toDoText.style.backgroundColor = "white";
  this.innerHTML = "<i class='fas fa-pencil-alt'></i>";
  this.style.backgroundColor = "goldenrod";
  this.onclick = editToDo;
}
  
function deleteToDo() {
  this.parentElement.remove();
}

const inputToDo = document.querySelector('#input-todo');

inputToDo.addEventListener('keypress', (e) => {
  if (e.key == "Enter") {
    addToDoItem();
  }
});