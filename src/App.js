import React from 'react';

import Todo from './Todo';
import './App.css';

const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'react a jayga!',
  'If you can imagine it, you can achieve it; if you can dream it, you can become it'
];

function App() {
  return (
    <div>
    {DUMMY_TODOS.map(todo => <Todo text={todo} />)}
  </div>


  )
}



export default App;
