import React from 'react';
import './TodosLoading.css';
import { GiSandsOfTime } from 'react-icons/gi';

function TodosLoading() {
    return (
      <div className="LoadingTodo-container">
        <span className="Loading"> <GiSandsOfTime className='Time'/> </span>
        <p className="LoadingTodo-text">Cargando...</p>
      </div>
    );
  };


export { TodosLoading };