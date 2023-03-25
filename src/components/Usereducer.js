import React, { useState } from 'react'
import { useReducer } from 'react'
import Todo from './Todo'

function Usereducer() {
    const [name, setName] = useState('')

    function reducer(todos, action) {
        switch (action.type) {
            case ACTIONS.NEW_TODO:
                return [...todos, newTodo(action.payload.name)]
            case ACTIONS.TOGGLE_TODO:
                return todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo
                })
            default:
                return name
        }
    }
    const ACTIONS = {
        NEW_TODO: 'add-todo',
        TOGGLE_TODO: 'toggle-todo'
    }


    const [todos, dispatch] = useReducer(reducer, [])

    function newTodo(name) {
        return {
            id: Date.now(),
            name: name,
            complete: false
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: ACTIONS.NEW_TODO, payload: { name: name } })
        setName('')
    }

    console.log(todos)

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} ACTIONS={ACTIONS} />
            })}
        </form>
    )
}

export default Usereducer