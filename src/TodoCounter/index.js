import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)
  return(
    <div>
    <h1 className='todoCounter'>
      Has completado {completedTodos} de {totalTodos} Tareas
    </h1>
    </div>
  );
}

export { TodoCounter };