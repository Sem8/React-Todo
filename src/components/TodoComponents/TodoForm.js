import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addATask} className='todoForm'>
            <input 
            type='text'
            value={props.value}
            onChange={props.handleMyChanges}
            name='task'
            placeholder='... things to do' 
            />
            
            <button type='submit' onClick={props.addATask}>Add to do</button>
            <button type='submit'>Completed</button>
            <button type='submit' onClick={props.handleClearATodo}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;

// 