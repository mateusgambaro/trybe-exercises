import logo from './logo.svg';
import './App.css';
import React from 'react';

const tasks = [
  'escovar os dentes',
  'estudar',
  'ler',
  'rever conteudo react',
];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ul> {tasks.map(tasks => Task(tasks)) }</ul>
    )
  }
}

export default App;
