import './App.css'

function App() {
  return (
    <div>
      <Hello />
      <Bye />
    </div>
  );
}

function Hello() {
  return <p>Hello, React!</p>;
}

function Bye() {
  return <p>Goodbye, React!</p>;
}

export default App
