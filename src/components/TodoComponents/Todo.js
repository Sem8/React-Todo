import React from 'react';

const Todo = props => {
    return (
        <div className={`confusingTodoDiv ${props.secondConfusingTodoFile.completed ? 'completed' : ''}`}
        onClick={() => props.toggleItem(props.secondConfusingTodoFile.id)}>
          <p>{props.secondConfusingTodoFile.task}</p>  
        </div>
    )
}

export default Todo;

// {`confusingTodoDiv ${props.eachTodo.completed ? 'completed' : ''}`}