import React from 'react';
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        toRenderItems: toRenderTodos,
        setToRenderItems: setToRenderTodos,
      } = useLocalStorage('TODOS_V1', []);
      //TODOs to render initial state
      
      //Counter for the total TODOs and completed TODOs
      let completedTodosLength = todos.filter(todo => todo.completed).length;
      let totalTodos = todos.length;
      let count = totalTodos - completedTodosLength;
    
      //Stocked active, completed and all the TODOs
      // let renderedTodos = [...toRenderTodos]; 
      // const allTodos = [];
      // const completedTodos = [];
      // const activeTodos = [];
      
      // let allTodosFilter;
      // let activeTodosFilter;
      // let completedTodosFilter;
      
      // useEffect(() => {
        
      //   todos.map(todo => {
      //     return allTodos.push(todo)
      //   })
        
      //   todos.map(todo => {
      //     if(!todo.completed){
      //      activeTodos.push(todo);
      //     }
      //     return activeTodos;
      //   })
    
      //   todos.map(todo => {
      //     if(todo.completed){
      //       completedTodos.push(todo)
      //     }
      //     return completedTodos;
      //   })
      // });
    
      // useEffect(() => {
      //   allTodosFilter = document.querySelector('#allTodos');
      //   activeTodosFilter = document.querySelector('#activeTodos');
      //   completedTodosFilter = document.querySelector('#completedTodos');
      // })
    
      //We change the todos state depending on the filter we press
      const toggleFilterAll = () => {
        const newTodos = [...todos]
        setToRenderTodos(newTodos);
      };
    
      const toggleFilterActive = () => {
        const newTodos = [];
        todos.map(todo => {
          if(!todo.completed){
            newTodos.push(todo);
          }
          return newTodos;
        })
        setToRenderTodos(newTodos);
      };
    
      const toggleFilterCompleted = () => {
        const newTodos = [];
        todos.map(todo => {
          if(todo.completed){
            newTodos.push(todo);
          }
          return newTodos;
        })

        setToRenderTodos(newTodos);
      };

      //Complete and delete TODO functions
    
      const completeTodo = (content) => {
        const todoIndex = todos.findIndex(todo => todo.content === content);
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
        setToRenderTodos(newTodos);
      }
    
      const deleteTodo = (content) => {
        const todoIndex = toRenderTodos.findIndex(todo => todo.content === content);
        const newTodos = [...todos]
        newTodos.splice(todoIndex,1)
        saveTodos(newTodos);
        setToRenderTodos(newTodos);
      }

    return (
        <TodoContext.Provider value={{
            todos,
            error,
            loading,
            count,
            completedTodosLength,
            toRenderTodos,

            toggleFilterAll,
            toggleFilterActive,
            toggleFilterCompleted,

            completeTodo,
            deleteTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export {TodoContext, TodoProvider};