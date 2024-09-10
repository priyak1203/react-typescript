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

taskForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskDescription = formInput?.value;

  if (taskDescription) {
    // add task to list
    // render tasks
    // update local storage
    console.log(taskDescription);
    formInput.value = '';
    return;
  }

  alert('Please enter a task description');
});
