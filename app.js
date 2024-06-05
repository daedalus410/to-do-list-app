document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(newTaskInput.value);
        newTaskInput.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
    }
});
