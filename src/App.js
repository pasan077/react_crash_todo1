import React from 'react';
import './App.css';
import Todos from './components/Todos.js';

class App extends React.Component {
  render (){
  return (
    <div className="App">
      <Todos />
    </div>
  );
 }
}

export default App;
