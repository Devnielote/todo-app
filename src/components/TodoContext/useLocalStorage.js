import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue){
    const [error, setError] = useState(false)
    const [loading, setIsLoading] = useState(true);
    const [item, setItem ] = useState(initialValue);
    const [toRenderItems, setToRenderItems] = useState(item);

    useEffect(() => {
      setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }

        setItem(parsedItem);
        setToRenderItems(parsedItem);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }, 1000)
    console.log('holis')
  },[]);
    
      const saveItem = (newItem) => {
        try {
          const stringifiedItem = JSON.stringify(newItem);
          localStorage.setItem(itemName, stringifiedItem);
          setItem(newItem)
        } catch (error) {
          setError(error)
        }
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      toRenderItems,
      setToRenderItems,
    };
    
  };

  export {useLocalStorage}