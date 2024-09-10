console.log('TypeScript Loaded');

const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

// task type
type Task = {
  description: string;
  isCompleted: boolean;
};

// Add task to the tasks list
function addTask(task: Task): void {
  tasks.push(task);
}

// Render task on the UI
function renderTask(task: Task): void {
  const taskElement = document.createElement('li');
  taskElement.textContent = task.description;
  taskListElement?.appendChild(taskElement);
}

// Load tasks from localStorage
function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// Retrieve tasks from localStorage
const tasks: Task[] = loadTasks();

// Render tasks on page load
tasks.forEach(renderTask);

// update tasks in local storage
function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskDescription = formInput?.value;

  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    // add task to list
    addTask(task);

    // render task
    renderTask(task);

    // update local storage
    updateStorage();

    formInput.value = '';
    return;
  }

  alert('Please enter a task description');
});
