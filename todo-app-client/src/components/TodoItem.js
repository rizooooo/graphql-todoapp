import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext';
import { TODO_GRAPHQL } from '../core/fetch.agent';

const TodoItem = ({ todo : { id, name, done } }) => {
    
    const { onUpdateTodo, onDeleteTodo, toggleEditMode } = useContext(TodoContext);
    const onHandleItem = async () => {
        try {
            const res = await TODO_GRAPHQL.UPDATE_TODO({ id, name, done: !done })
            onUpdateTodo(res);
        } catch (error) {
            console.log(error);
        }
    };

    const onHandleDeleteItem = async () => {
        try {
            const res = await TODO_GRAPHQL.DELETE_TODO({ id })
            onDeleteTodo(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
        <h4 className={done ? 'done' : ''}>{name}</h4>
        <span>
            <small onClick={onHandleItem}>{done ? 'UNDONE' : 'DONE'}</small>
            <small onClick={onHandleDeleteItem}>DELETE</small>
            <small onClick={() => toggleEditMode({id, name, done})}>EDIT</small>
        </span>
      </div>
    )
}

export default TodoItem
