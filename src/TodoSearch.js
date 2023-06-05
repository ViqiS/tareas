import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
}) {
  
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