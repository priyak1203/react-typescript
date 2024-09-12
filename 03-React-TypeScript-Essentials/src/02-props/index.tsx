function Component({ name, id }: { name: string; id: number }) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default Component;
