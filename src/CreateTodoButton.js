import './CreateTodoButton.css';
function CreateTodoButton() {
  return(
    <button className='CreateTodoButton'
      onClick= {
        (event) => {
          console.log('le diste click');
          
        } 
      }
    > Agregar ToDo </button>
  );
}

export { CreateTodoButton };