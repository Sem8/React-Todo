// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';

function TodoList(props) {
    return (
        <div className='confusingTodoList'>
            {/* <h1>{props.aTodo.task}</h1> */}
            {props.personTodo.map(eachTodo => (
                <Todo secondConfusingTodoFile={eachTodo} />
            ))}

        </div>
    );
};

export default TodoList;
