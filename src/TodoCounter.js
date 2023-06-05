import './TodoCounter.css';

function TodoCounter({ total, completed}) {
  return(
    <div>
    <h1 className='todoCounter'>
      Has completado {completed} de {total} ToDo's
    </h1>
    </div>
  );
}

export { TodoCounter };