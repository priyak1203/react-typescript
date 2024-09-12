import Component from './02-props';

function App() {
  return (
    <main>
      <h2>React & TypeScript</h2>
      <Component name="Rohan" id={128}>
        <h2>Optional Children Prop</h2>
      </Component>
      <Component name="Varun" id={147}></Component>
    </main>
  );
}

export default App;
