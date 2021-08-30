import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
    { Task ('ola')}
    </div>
  );
}

export default App;
