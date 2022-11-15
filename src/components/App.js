import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './TodoContext/context';
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
//     content: 'por que la caca de max es infecciosa de su virus muy gori gori.',
//     completed: false
//   },
//   {
//     content: 'Viejo panza.',
//     completed: false
//   }
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  )
}

export default App;
