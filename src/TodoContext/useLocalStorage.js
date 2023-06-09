import React from "react";

function  useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  const  [loading, setLoading] = React.useState(true);
  const  [error, setError] = React.useState(false);

React.useEffect(() => {
  setTimeout(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if(!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
      setItem(parsedItem);
    }
  
    setLoading(false);
  
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, 3000);
}, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item, 
    saveItem,
    loading,
    error,
  };
  /* Si tenemos mas de dos customHook para retornar, es mejor devolverlo como un objeto */
}

export { useLocalStorage };

/* localStorage.removeItem('TODOS_V1');
  const defaultTodos = [
  { text: 'hola buenos dias como estas', completed: false},
  { text: 'chau', completed: true},
  { text: 'comer', completed: false},
  { text: 'estudiar', completed: true},
  { text: 'otro todo', completed: true},
  { text: 'otros', completed: false},
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); 
*/
