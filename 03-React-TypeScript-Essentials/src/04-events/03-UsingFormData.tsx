import { useState } from 'react';

type Person = {
  name: string;
};

const Component = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget)
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    const newPerson: Person = { name: data.text as string };
    console.log(newPerson);

    // const text = formData.get('text');
    const text = formData.get('text') as string;
    const person: Person = { name: text };
    console.log(person);
  };

  return (
    <section>
      <h2>Events Example</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
};

export default Component;
