document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Retrieve tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render existing tasks
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            `;
            li.querySelector('.editBtn').addEventListener('click', () => editTask(index));
            li.querySelector('.deleteBtn').addEventListener('click', () => deleteTask(index));
            li.querySelector('span').addEventListener('click', () => toggleCompleted(index));
            taskList.appendChild(li);
        });
    }

    // Add new task
    function addTask() {
        const title = taskInput.value.trim();
        if (title) {
            tasks.push({ title, completed: false });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            taskInput.value = '';
        }
    }

    // Edit existing task
    function editTask(index) {
        const newTitle = prompt('Edit task:', tasks[index].title);
        if (newTitle !== null) {
            tasks[index].title = newTitle.trim();
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    // Delete task
    function deleteTask(index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    // Toggle task completion
    function toggleCompleted(index) {
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }

    // Event listeners
    addTaskBtn.addEventListener('click', addTask);

    // Initial render
    renderTasks();
});
