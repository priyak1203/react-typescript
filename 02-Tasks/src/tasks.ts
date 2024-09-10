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
