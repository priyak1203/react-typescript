interface ComponentProps {
  name: string;
  id: number;
  children: React.ReactNode;
}

function Component(props: ComponentProps) {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h3>ID: {props.id}</h3>
      {props.children}
    </div>
  );
}

export default Component;
