import React from 'react';
import '../css/App.css'
import  '../css/Header.css'
import'../css/TodoAddItem.css';
import'../css/TodoCounter.css';
import'../css/TodoFilter.css';
import'../css/TodoList.css';
import { Header } from './Header';
import { TodoCounter } from './TodoCounter';
import { TodoAddItem } from './TodoAddItem';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';

function AppUI({
    count,
    completed,
    filterAllFunc,
    filterActiveFunc,
    filterCompletedFunc,
    renderedTodos,
    completeTodo,
    deleteTodo,
}) {
    return (
        <>
        <Header/>
      <div className="main">
        <TodoAddItem/>
        <TodoList>
         {
         renderedTodos.map(todo =>(
          <TodoItem
          key={todo.content} 
          text={todo.content} 
          isTaskComplete={todo.completed}
          onComplete={() => completeTodo(todo.content)}
          onDelete={() => deleteTodo(todo.content)}
          />
         ))
         }
        <TodoCounter
         count={count}
         completed={completed}
         />
        </TodoList>
  
        <TodoFilter
        filterAllFunc={filterAllFunc}
        filterActiveFunc={filterActiveFunc}
        filterCompletedFunc={filterCompletedFunc}
        />
      </div>
      </>
    );
    
}

export {AppUI}