import React, { useEffect, useState } from 'react';
import { AppUI } from './AppUI';

//Hardcoded TODOs for now
// const todoList = [
//   {
//     content: 'Dare de comer a pero.',
//     completed: true
//   },
//   {
//     content: 'Ayurame yo tengo muchos quereseres.',
//     completed: true
//   },
//   {
//     content: 'Porque mi casa está sucia.',
//     completed: false
//   },
//   {
//     content: 'Lorem ipsum, dolor sit amet consectetur',
//     completed: false
//   },
//   {
//     content: 'Lorem ipsum dolor sit amet.',
//     completed: false
//   },
//   {
//     content: 'Lorem ipsum dolor sit amet consectetur.',
//     completed: false
//   }
// ];

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
     parsedTodos = JSON.parse(localStorageTodos)
  }
 
  //TODOs initial state
  const [todos, setTodos ] = useState(parsedTodos);
  const [toRenderTodos, setToRenderTodos] = useState(todos);

  //Counter for the total TODOs and completed TODOs
  const completedTodosLength = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  //Stocked active, completed and all the TODOs
  const renderedTodos = [...toRenderTodos]; 
  const allTodos = [];
  const completedTodos = [];
  const activeTodos = [];

  let allTodosFilter;
  let activeTodosFilter;
  let completedTodosFilter;

  useEffect(() => {

    todos.map(todo => {
      return allTodos.push(todo)
    })
    
    todos.map(todo => {
      if(!todo.completed){
       return activeTodos.push(todo);
      }
    })

    todos.map(todo => {
      if(todo.completed){
        return completedTodos.push(todo)
      }
    })

    allTodosFilter = document.querySelector('#allTodos');
    activeTodosFilter = document.querySelector('#activeTodos');
    completedTodosFilter = document.querySelector('#completedTodos');
  });

  //We change the todos state depending on the filter we press
  const toogleFilterAll = () => {
    const newTodos = [...allTodos];
    activeTodosFilter.checked = false;
    completedTodosFilter.checked = false;
    setToRenderTodos(newTodos);
  };

  const toogleFilterActive = () => {
        const newTodos = [...activeTodos];
        allTodosFilter.checked = false;
        completedTodosFilter.checked = false;
        setToRenderTodos(newTodos);
  };

  const toogleFilterCompleted = () => {
      const newTodos = [...completedTodos];
      allTodosFilter.checked = false;
      activeTodosFilter.checked = false;
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
    const todoIndex = toRenderTodos.findIndex(todo => todo.content === content);
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);
    setToRenderTodos(newTodos);
  }

  return (
    <AppUI
    count={totalTodos - completedTodosLength}
    completed={completedTodosLength}

    filterAllFunc={toogleFilterAll}
    filterActiveFunc={toogleFilterActive}
    filterCompletedFunc={toogleFilterCompleted}

    renderedTodos={renderedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )
}

export default App;
