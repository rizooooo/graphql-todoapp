import React, { useState, useContext, useEffect } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TODO_GRAPHQL } from '../core/fetch.agent';

const TodoForm = () => {

    const { onAddTodo, editMode, toggleEditMode, onUpdateTodo } = useContext(TodoContext);
    const [todo, setTodo] = useState('');

    useEffect(() => {
        if (editMode) {
            setTodo(editMode.name);
        } else {
            setTodo('');
        }
    }, [editMode])

    const onHandleTodo = async () => {
        if (!todo) return;

        if (editMode) {
            const { id, done } = editMode;
            try {
                const res = await TODO_GRAPHQL.UPDATE_TODO({ id, name: todo, done });
                onUpdateTodo(res);
                setTodo('');
            } catch (error) {
                console.log(error);
                setTodo('');
            }
        } else {
            try {
                const res = await TODO_GRAPHQL.CREATE_TODO(todo);
                console.log(res, 'CREATED');
                onAddTodo(res);
                setTodo('');
            } catch (error) {
                console.log(error);
                setTodo('');
            }
        }
    }

    const handleChange = ({ target: { value} }) => setTodo(value);
    return (
        <div className='list-form'>
            <input value={todo} onChange={handleChange} type='text' placeholder='Add Todo'  />
            <button type='button' onClick={onHandleTodo}>{editMode ? 'UPDATE': 'ADD'}</button>
            {editMode &&  <button type='button' onClick={() => toggleEditMode(null)}>CANCEL</button>}
          
        </div>
    )
}

export default TodoForm
