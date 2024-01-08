const container = document.createElement("div");
container.setAttribute("classs", "container");
root.appendchild(container);
function renderTask(list) {
  container.innerHTML = "";

  const taskTodo = list.filter((todo) => {
    return todo.status == "To do";
  });
}
const todoStatusDiv = document.createElement("div");
todoStatusDiv.setAttribute("class", "status");
taskTodo.map((task) => {
  const newTask = createTask(task);
  todoStatusDiv.appendChild(newTask);
  container.appendChild(todoStatusDiv);
});
const taskInProgress = list.filter((todo) => {
  return todo.status == "In Progress";
});
const InProgressStatusDiv = document.createElement("div");
InProgressStatusDiv.setAttribute("class", "status_column");
taskInProgress.map((task)=>{})
