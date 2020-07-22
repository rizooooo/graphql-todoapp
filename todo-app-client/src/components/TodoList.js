import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem';

const TodoList = () => {
    const { lists } = useContext(TodoContext);
    return (
        <div className='todos-container'>
        {lists && lists.map(todo => <TodoItem
        //   onUpdateTodo={onUpdateTodo} 
          todo={todo} 
          key={todo.id} 
         /> )}
      </div>
    )
}

export default TodoList
