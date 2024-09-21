import { useState } from 'react';
import Form from './Form';
import List from './List';
import { type Task } from './types';

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <section>
      <Form />
      <List />
    </section>
  );
};

export default Component;
