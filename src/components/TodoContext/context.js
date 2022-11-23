import React from 'react';
import { useState } from 'react';
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
      //State for the modal
      const [openModal, setOpenModal] = useState(false);
      //State for themes
      const [isLigthTheme, setIsLightTheme] = useState(false);

      //Toggle function for web themes
      const toggleTheme = () => {
        setIsLightTheme(current => !current);
      }
      if(isLigthTheme){
        document.body.style.backgroundColor = 'white'
      } else if(!isLigthTheme) {
        document.body.style.backgroundColor = '#161722';
      }

      //Counter for the total TODOs and completed TODOs
      let completedTodosLength = todos.filter(todo => todo.completed).length;
      let totalTodos = todos.length;
      let count = totalTodos - completedTodosLength;
        
      //We change the toRenderTodos state depending on the checked filter
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
    
      const addTodo = (content) => {
        const newTodos = [...todos];
        newTodos.push({
          content: content,
          completed: false,
        });
        saveTodos(newTodos);
        setToRenderTodos(newTodos);
      }

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
            openModal,
            isLigthTheme,

            toggleFilterAll,
            toggleFilterActive,
            toggleFilterCompleted,
            toggleTheme,

            completeTodo,
            deleteTodo,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export {TodoContext, TodoProvider};