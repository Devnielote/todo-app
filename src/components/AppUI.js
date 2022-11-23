import React from 'react';
import '../css/App.css'
import  '../css/Header.css'
import'../css/TodoAddItem.css';
import'../css/TodoCounter.css';
import'../css/TodoFilter.css';
import'../css/TodoList.css';
import { TodoContext } from './TodoContext/context';
import { Header } from './Header';
import { TodoCounter } from './TodoCounter';
import { TodoAddItem } from './TodoAddItem';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from './TodoItem';
import { MyLoader} from './contentLoader';
import { ToggleTheme } from './ThemeButton';

function AppUI() {
  const {
    todos,
    error,
    loading,
    toRenderTodos,
    completeTodo,
    deleteTodo,
  } = React.useContext(TodoContext)

    return (
        <>
        <Header/>
            <div className="main">
            <TodoAddItem/>
            <TodoList>
              {error && <p>An error has ocurred, sowwy(っ °Д °;)っ</p>}
              {loading && <MyLoader></MyLoader>}
              {(!loading && !todos.length) &&
               <div className="noTodoMessage__container">
                 <p>Create your first TODO （￣︶￣）↗</p>
               </div>
               }
             {toRenderTodos.map(todo =>(
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
             />
            </TodoList>
            
            <TodoFilter
            />
          </div>
      </>
    );
    
}

export {AppUI}