const toDoInput = document.querySelector('.todo-input');
const addTodo = document.querySelector('.add-button');
const toDoList = document.querySelector('.todo-list');

addTodo.addEventListener("click", () => {
  addTask();
});

toDoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let name = toDoInput.value;
  toDoInput.value = "";

  const toDo = document.createElement("div");
  toDo.className = "todo-item";
  toDo.innerHTML = `
    <span>${name}</span>
    <button class="delete-button">Delete</button>
  `;

  const deleteButton = toDo.querySelector(".delete-button");

  deleteButton.addEventListener("click", () => {
    toDo.remove();
  });

  toDoList.appendChild(toDo);
  }