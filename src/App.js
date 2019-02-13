import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

const semTodo = [
  {
    task: 'Understand React',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Understand props and inheritance in React',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Not feel lost with React',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Not hate React',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      personTodo: semTodo,
      task: '',
      id: '',
      completed: ''
    };
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className='todoList'>
          <h3>Tortured by React with the ugly Todo list MVP</h3>
          <TodoList personTodo={this.state.personTodo}/>

        </div>
      </div>
    );
  }
}

export default App;
