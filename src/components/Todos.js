import React, { Component } from 'react';

class Todos extends React.Component {
  render(){
  return this.props.todos.maps((todos) => (
  <h3>{ todo.title } </h3>
  ));
  }
}    
  
export default Todos;
