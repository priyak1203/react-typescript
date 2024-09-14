import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: 'https://reactjs.org',
    text: 'react docs',
  },
  {
    id: 2,
    url: 'https://reactrouter.com',
    text: 'react router docs',
  },
  {
    id: 3,
    url: 'https://reacttraining.com',
    text: 'react traning',
  },
];

const Component = () => {
  const [text, setText] = useState('Hello World');
  const [number, setNumber] = useState(1);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & TypeScript</h2>
      <h4 className="t-center mb-1">Text : {text}</h4>
      <h4 className="t-center mb-1">Number: {number}</h4>
      <div className="t-center mb-1">
        {list.map((item) => {
          return <span key={item}>{item} </span>;
        })}
      </div>

      <button
        className="btn btn-center"
        onClick={() => {
          setText('Hello TypeScript');
          setNumber(333);
          //   setList([1,'hello']) // This will result in TypeScript Error
          setList(['John', 'Smith']);
          setLinks([...links, { id: 4, url: 'hello', text: 'hello world' }]);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Component;
