import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from '../reducers/Reducers';

const TodoForm = () => {

    const [ state, dispatch ] = useReducer(todoReducer, initialState)

    const [ todoInput, setTodoInput ] = useState({
        item: '',
        completed: false
    });

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({ type: 'ADD_ITEM', payload: todoInput })

        setTodoInput({
            item: '',
            completed: false
        });
    }

    const handleChange = e => {
        setTodoInput({ ...todoInput, item: e.target.value, id: Date.now() })
    }

    const toggleChange = todo => {
        dispatch({ type: 'TOGGLE', payload: todo })
    }

    const clearItem = e => {
        dispatch({ type: 'CLEAR' })
    }

    return (
        <React.Fragment>
            <h1>Todo List</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    onChange={handleChange}
                    name='todoInput'
                    value={todoInput.item}
                />
                <button onClick={handleSubmit}>Add</button>
                <button onClick={clearItem}>Clear</button>
            </form>

        {state.map(todo => <div onClick={() => toggleChange(todo)} className={todo.completed ? 'done' : '' }>
            {todo.item}
            </div>)}
        </React.Fragment>
    )
}

export default TodoForm;