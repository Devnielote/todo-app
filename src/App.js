import React, { useEffect } from 'react';
import { useState } from 'react';
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
// import logo from './logo.svg';
// import './App.css';

//Componentes que se necesitan:a
// TODO Counter
// TODOSearch
// TODOList y un TODOItem que será componente hijo del TODOList
// CreateTODOButton

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

  const [todos, setTodos ] = useState(todoList);
  const [someVar, setSomeVar] = useState(null);
  //Levantamiento de estados de los filtros.
  const [isFilterAll, setIsFilterAll] = useState(true);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isFilterCompleted, setIsFilterCompleted] = useState(false);



  
  const renderData = () => {
    setSomeVar(true);
  }
 
  let todoFilters = [{
    all: true,
    active: false,
    completed: false
  }]

  let [filterAll, filterActive, filterCompleted] = [todoFilters[0].all, todoFilters[0].active, todoFilters[0].completed];

  //Lógica de contador de todos
  const completedTodosLength = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const completedTodos = [];
  const activeTodos = [];

  let toRenderTodos = [];

  todos.map(todo => {
    if(todo.completed){
      completedTodos.push(todo)
    }
    if(!todo.completed){
      activeTodos.push(todo)
    }
  });

  //lógica para filtrar todos - NO conseguí desarrollar una lógica para utilizar los states para manejar los filtros.

  // if(filterAll === true){
  //   filterActive = false;
  //   filterCompleted = false;
  //   toRenderTodos = todos;
  //   console.log('Showing all todos:', toRenderTodos)
  // } else if (filterActive === true){
  //   filterAll = false;
  //   filterCompleted = false;
  //   toRenderTodos = activeTodos;
  //   console.log('Showing only active todos:',toRenderTodos)
  // } else if(filterCompleted === true){
  //   filterAll = false;
  //   filterCompleted = false;
  //   toRenderTodos = completedTodos;
  //   console.log('Showing only completed todos:', toRenderTodos);
  // };

  const checkFilters = () => {
    if(filterAll === true && filterActive === false && filterCompleted === false){
      toRenderTodos = todos;
      console.log('Showing all todos:', toRenderTodos)
    } else if(filterAll === false && filterActive === true && filterCompleted === false) {
      toRenderTodos = activeTodos;
      console.log('Showing only active todos:', toRenderTodos)
    } else if(filterAll === false && filterActive === false && filterCompleted === true) {
      toRenderTodos = completedTodos;
      console.log('Showing only completed todos:', toRenderTodos);
    } else if(filterAll === false && filterActive === false && filterCompleted === false) {
      toRenderTodos = todos;
    };
    renderData();
  }
  
  if(filterAll === true && filterActive === false && filterCompleted === false){
    toRenderTodos = '';
    toRenderTodos = todos;
    console.log('Showing all todos:', toRenderTodos)
  } else if(filterAll === false && filterActive === true && filterCompleted === false) {
    toRenderTodos = '';
    toRenderTodos = activeTodos;
    console.log('Showing only active todos:', toRenderTodos)
  } else if(filterAll === false && filterActive === false && filterCompleted === true) {
    toRenderTodos = '';
    toRenderTodos = completedTodos;
    console.log('Showing only completed todos:', toRenderTodos);
  } else if(filterAll === false && filterActive === false && filterCompleted === false) {
    toRenderTodos = '';
    toRenderTodos = todos;
  };

  const toogleFilterAll = () => {
    setIsFilterAll(current => !current);
  }
  const toogleFilterActive = () => {
    setIsFilterActive(current => !current);
  }
  const toogleFilterCompleted = () => {
    setIsFilterCompleted(current => !current);
  }

  const filterAllIsActive = filterActive;
  const filterActiveIsActive = filterActive;
  const filterCompletedIsActive = filterActive;
  let todosToRender;

  if(filterAllIsActive && !filterActiveIsActive && !filterCompletedIsActive) {
    todosToRender = '';
    todosToRender = todos;
  } else if (!filterAllIsActive && filterActiveIsActive && !filterCompletedIsActive){
    todosToRender = '';
    todosToRender = activeTodos;
  } else if(!filterAllIsActive && !filterActiveIsActive && filterCompletedIsActive)
    todosToRender = '';
    todosToRender = completedTodos;
    
  return (
    <>
      <Header/>
    <div className="main">
      <TodoAddItem/>
      <TodoList>
       {
       toRenderTodos.map(todo =>(
        <TodoItem key={todo.content} text={todo.content} isTaskComplete={todo.completed}/>
       ))
       }
      <TodoCounter
       count={totalTodos - completedTodosLength}
       completed={completedTodosLength}
       />
      </TodoList>

      {/* <TodoFilter
      filterAll={filterAll}
      filterActive={filterActive}
      filterCompleted={filterCompleted}
      /> */}
       <div className="standar-container todoFilter">
        <label>
        <input type={'checkbox'} id={'allTodos'}/>
        <span>All</span>
        </label>
        <label>
        <input type={'checkbox'} id={'activeTodos'}/>
        <span>Active</span>
        </label>
        <label>
        <input type={'checkbox'} id={'completedTodos'}/>
        <span>Completed</span>
        </label>
        </div>

    </div>
    </>
  )
}

export default App;
