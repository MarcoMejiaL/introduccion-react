import React from 'react';

import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import {TodoList} from  './container/TodoList'




function App() {
  return (
    <div className='MainContainer'>
    <TodoCounter/>
    <TodoSearch/>
    <TodoList>
      
    </TodoList>

    

    
    </div>
      
    
  );
}

export default App;
