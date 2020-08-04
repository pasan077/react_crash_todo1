import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos.js';


function App() {
  let [todos, setTodos] = useState(
    [
      { id:1, title: 'Take out the trash' },
      { id:2, title: 'Dinner with wife' },
      { id:3, title: 'Meeting with boss' }
    ]);

    console.log("this is a console log comment");
    //console.log(this.use
    
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
