import React, { createContext, useState, useEffect } from 'react'
import { TODO_GRAPHQL } from '../core/fetch.agent';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [lists, setList] = useState(false);
    const [editMode, setEditMode] = useState(null);

    const toggleEditMode = todo =>  todo ? setEditMode(todo) : setEditMode(null)
    
    const onAddTodo = (params) => {
        setList([...lists, params])
    };

    const onDeleteTodo = (param) => {
        const index = lists.findIndex(l => l.id === param.id);
        if (index !== -1) {
            const newArr = [...lists];
            newArr.splice(index, 1);
            setList(newArr);
        }
    };

    const onUpdateTodo = (todo) => {
        const index = lists.findIndex(l => l.id === todo.id);
        if (index !== -1) {
            const newArr = [...lists];
            newArr[index] = todo;
            setList(newArr);
        }
    };

    useEffect(() => {
        const GET_TODOS = async() => {
            const res = await TODO_GRAPHQL.GET_TODOS();
            setList(res);
        }
        GET_TODOS();
      }, []);

    return (
     <TodoContext.Provider value={{ 
         lists,
         onAddTodo,
         onUpdateTodo,
         onDeleteTodo,
         toggleEditMode,
         editMode
    }}>
         {children}
     </TodoContext.Provider>
    )
}

export default TodoContextProvider;
