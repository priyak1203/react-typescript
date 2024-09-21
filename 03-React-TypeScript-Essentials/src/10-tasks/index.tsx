import { useState } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <section>
      <Form addTask={addTask} />
      <List />
    </section>
  );
};

export default Component;
