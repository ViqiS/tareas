import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {
    setSearchValue,
    searchValue,
  } = React.useContext(TodoContext);
  
  return(
    <label className='search-label'>
    <input 
    placeholder="Buscador de tareas" 
    className='search-input' 
    value={searchValue}
    type='text' 
    onChange={(event)=> {
      setSearchValue(event.target.value);
    }}
    />
    </label>
    
  );
}

export { TodoSearch };