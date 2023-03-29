const taskInput = document.querySelector('#input-task');
const taskList = document.querySelector('#task-list');  
document.querySelector('form').addEventListener("submit", e => {
    e.preventDefault();
    const task = taskInput.value;
    const newTask = document.createElement('li');
    newTask.innerHTML = `<input type = 'checkbox' id = 'task-${taskList.children.length}'>
    <label for = 'task-${taskList.children.length}'></label>${task}`;
    newTask.classList.add('task');
    taskList.appendChild(newTask);
    taskInput.value = '';
});
taskList.addEventListener('click', e => {
    if(e.target.tagName === 'INPUT')
        e.target.parentElement.style.textDecoration = e.target.checked ? 'line-through' : 'none';
});