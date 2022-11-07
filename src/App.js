import React, { useEffect } from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import './App.css'
import  './Header.css'
import'./TodoAddItem.css';
import'./TodoCounter.css';
import'./TodoFilter.css';
import'./TodoList.css';
import { Header } from './Header';
import { TodoCounter } from './TodoCounter';
import { TodoAddItem } from './TodoAddItem';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';

//Hardcoded TODOs for now
const todoList = [
  {
    content: 'Dare de comer a pero.',
    completed: true
  },
  {
    content: 'Ayurame yo tengo muchos quereseres.',
    completed: true
  },
  {
    content: 'Porque mi casa está sucia.',
    completed: false
  },
  {
    content: 'Lorem ipsum, dolor sit amet consectetur',
    completed: false
  },
  {
    content: 'Lorem ipsum dolor sit amet.',
    completed: false
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur.',
    completed: false
  }
];

function App(props) {

  //TODOs initial state
  const [todos, setTodos ] = useState(todoList);
  const [toRenderTodos, setToRenderTodos] = useState(todos);

  //Counter for the total TODOs and completed TODOs
  const completedTodosLength = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //Stocked active, completed and all the TODOs
  const renderedTodos = [...toRenderTodos]; 
  const allTodos = [];
  const completedTodos = [];
  const activeTodos = [];

  //Every time the todo state changes this code down below update the stocked array of TODOs
 
    // todosToRender.map(todo => {
    //   allTodos.push(todo);
    //   if(todo.completed){
    //     completedTodos.push(todo)
    //   }
    //   if(!todo.completed){
    //     activeTodos.push(todo)
    //   }
    // });

  //Initially we render the untouched todo state that is stocked in a variable

  //Filter logic - stock all the filter states in constants
  // const filterAllIsActive = isFilterAll;
  // const filterActiveIsActive = isFilterActive;
  // const filterCompletedIsActive = isFilterCompleted;

  
  // *Update: I just realize that all the work and suffering looking for a way to work with booleans states was in vain. I could easily just change the todo state depending on the pressed filter and it will rerender itself.... (っ °Д °;)っ

  //We change the todos state depending on the filter we press
  const toogleFilterAll = () => {
    // if(!filterAllIsActive){
    //   // setIsFilterAll(current => !current);
    //   setTodos(allTodos)
      
    // };
    // if(filterActiveIsActive){
    //   // setIsFilterActive(current => !current);
    // }
    // if(filterCompletedIsActive){
    //   // setIsFilterCompleted(current => !current);
    // }
    const newTodos = [...todos];
    setToRenderTodos(newTodos);
  };

  const toogleFilterActive = () => {
    // if(filterAllIsActive && filterCompletedIsActive){
      //   // setIsFilterAll(current => !current);
      //   // setIsFilterCompleted(current => !current);
      // };
      
      // if(!filterActiveIsActive){
        //   // setIsFilterActive(current => !current);
        //   setTodos(activeTodos);
        // }
        // setTodos(activeTodos);
        todos.map(todo => {
          if(!todo.completed){
          activeTodos.push(todo)
          }
        });
        const newTodos = [...activeTodos]
        setToRenderTodos(newTodos);
        // todosToRender = activeTodos;
  };

  const toogleFilterCompleted = () => {
    // if(filterAllIsActive){
    //   // setIsFilterAll(current => !current);
    // };
    // if(filterActiveIsActive){
    //   // setIsFilterActive(current => !current);
    // }
    // if(!filterCompletedIsActive){
    //   // setIsFilterCompleted(current => !current);
    // }
      // setTodos(completedTodos);
       todos.map(todo => {
      if(todo.completed){
        completedTodos.push(todo)
      }
    });
      const newTodos = [...completedTodos];
      setToRenderTodos(newTodos);
  };

  //Complete and delete TODO functions

  const completeTodo = (content) => {
    const todoIndex = todos.findIndex(todo => todo.content === content);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (content) => {
    const todoIndex = todos.findIndex(todo => todo.content === content);
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);
    setToRenderTodos(newTodos);
  }

  
  
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
       count={totalTodos - completedTodosLength}
       completed={completedTodosLength}
       />
      </TodoList>

      <TodoFilter
      filterAllFunc={toogleFilterAll}
      filterActiveFunc={toogleFilterActive}
      filterCompletedFunc={toogleFilterCompleted}
      />
    </div>
    </>
  )
}

export default App;
