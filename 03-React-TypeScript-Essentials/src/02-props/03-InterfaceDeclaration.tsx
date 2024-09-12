interface ComponentProps {
  name: string;
  id: number;
}

function Component(props: ComponentProps) {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h3>ID: {props.id}</h3>
    </div>
  );
}

export default Component;
