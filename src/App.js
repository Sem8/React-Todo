import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
      // task: '',
      // id: '',
      // completed: '',  
      newTask: ''    
    };
  }

  addTask = e => {
    e.preventDefault();
    // console.log(e.target); 
    this.setState({
      personTodo: [...this.state.personTodo, { task: this.state.newTask, id: Date.now(), completed: false }],
      newTask: '' });   
    // const newPersonTodo = {
    //   newTask: this.state.newTask,
    //   task: this.state.task
    //   // id: this.state.id,
    //   // completed: this.state.completed
    // } 
   
  }; 

  handleChanges = e => {
    this.setState({
      newTask: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className='todoList'>
          <h3>Tortured by React with an ugly Todo list MVP</h3>
          <TodoList personTodo={this.state.personTodo} />
        

        <TodoForm
        addTask={this.addTask}
        // task={this.state.newTask}
        handleChanges={this.handleChanges}
        // id={this.state.id}
        // completed={this.state.completed}
        value={this.state.newTask}
         />
      </div>
      </div>
    );
  }
}

export default App;
