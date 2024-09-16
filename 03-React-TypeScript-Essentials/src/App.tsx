import Component from './05-challege';

function App() {
  return (
    <main>
      <h2>React & TypeScript</h2>
      <Component type="basic" name="anna" />
      <Component type="advanced" name="Susan" email="susan@gmail.com" />
      <Component type="advanced" name="David" />
    </main>
  );
}

export default App;
