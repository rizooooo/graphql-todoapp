import React from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoContextProvider from './context/TodoContext';

const App = () => {
    return (
        <TodoContextProvider>
            <div className='container'>
                <h1>TODO <small className='text-blue'>APP</small></h1>
                <div className='list-container'>
                    <TodoList />
                    <TodoForm />
                </div>
            </div>
      </TodoContextProvider>
    )
}
export default App;
