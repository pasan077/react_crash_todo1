import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
  render(){
  return this.props.todos.maps((todos) => (
  <TodoItem />
  ));
  }
}    
  
export default Todos;
