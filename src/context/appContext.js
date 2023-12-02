import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [todos, settodos] = useState([]);

    const date = new Date()
  
    const time = date.getHours() +":"+ date.getMinutes()
  
    function submitHandler(e) {
      e.preventDefault()
      
      const v = e.target.todo.value 
      const obj = {
        id: Math.floor(Math.random() * 999999),
        todoInput: v,
        time: time
       
      }
  
      settodos(i => [...i, obj])
      
      e.target.todo.value = ""
      
    }
    
    function clickHandler(clickedItem) {
      const deleted = todos.filter(i => i != clickedItem)
      settodos(i => deleted)
    }

    return <AppContext.Provider value={{todos, submitHandler, clickHandler,time}} >
        {children}

    </AppContext.Provider>
}

export const useAppContext = (()=> {
    return useContext(AppContext)
})