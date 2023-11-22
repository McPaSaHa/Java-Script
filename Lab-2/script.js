let todoId = 0;

function addTodo() {
 const todoText = prompt("Введіть текст завдання:");

  if (!todoText) {
return;
  }
  
  const newTodo = document.createElement("div");
  newTodo.className = "todo card p-3";
  newTodo.id = `todo-${todoId}`;
  
  const todoTextElement = document.createElement("p");
  todoTextElement.className = "todo-text card-text";
  todoTextElement.textContent = todoText;
  newTodo.appendChild(todoTextElement);

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button btn btn-danger";
  deleteButton.textContent = "Видалити";
  deleteButton.addEventListener("click", () => {
    deleteTodo(newTodo.id);
  });
  newTodo.appendChild(deleteButton);

  document.body.appendChild(newTodo);

  todoId++;
}

function deleteTodo(todoId) {
  const todoToRemove = document.getElementById(todoId);
  if (todoToRemove) {
    todoToRemove.remove();
  }
}
