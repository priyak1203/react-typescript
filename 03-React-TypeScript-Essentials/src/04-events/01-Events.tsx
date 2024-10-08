import { useState } from 'react';

const Component = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <section>
      <h2>Events Example</h2>
      <form className="form">
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
};

export default Component;
