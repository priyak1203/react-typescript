console.log('TypeScript Loaded');

const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

// task type
type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

function addTask(task: Task): void {
  tasks.push(task);
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

    // render tasks
    // update local storage
    formInput.value = '';
    return;
  }

  alert('Please enter a task description');
});
