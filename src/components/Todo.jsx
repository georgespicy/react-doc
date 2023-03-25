import React from 'react'
import Button from '@mui/material/Button';

function Todo({ todo, dispatch, ACTIONS }) {
    return (
        <div>
            <span style={{color:todo.complete ? "#AAA" : '#000'}}>
                {todo.name}
            </span>
            <Button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })}>Toggle</Button>
            <Button>Delete</Button>
        </div>
    )
}

export default Todo