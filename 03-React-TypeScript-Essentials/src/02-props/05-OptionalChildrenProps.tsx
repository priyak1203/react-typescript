type ComponentProps = {
  name: string;
  id: number;
  children?: React.ReactNode;
};

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h3>ID: {id}</h3>
      {children}
    </div>
  );
}

export default Component;
