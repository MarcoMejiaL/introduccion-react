import React from 'react';

import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from  './container/TodoList'

import {CreateTodoButton} from './components/CreateTodoButton'

function App() {
  return (
    <>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      
    </TodoList>

    <CreateTodoButton/>

    
    </>
      
    
  );
}

export default App;
