const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    alert('Please enter a task');
  } else {
    const task = taskInput.value;
    addTask(task);
    taskInput.value = '';
  }
});

function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = task;
  taskList.appendChild(li);
}
