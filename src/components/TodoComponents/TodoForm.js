import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input 
            type='text'
            value={props.task}
            onChange={props.handleChanges}
            name='task'
            placeholder='... things to do' 
            />
            
            <button type='submit' onClick={props.addTask}>Add Todo</button>
            <button type='submit'>Completed</button>
        </form>
    );
};

export default TodoForm;