import React from 'react';
import './App.css';
import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDos</h1>
      </header>
      <Main />
      <footer>
        <p>Double-click to edit a todo</p>
        <p>Idea by Oscar Godson</p>
        <p>Created by Svitlana Tsupryk</p>
        <p>Part of TodoMVC</p>
      </footer>
    </div>
  );
}

export default App;
