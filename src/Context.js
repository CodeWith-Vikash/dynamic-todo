import { createContext, useContext } from "react";


export const TodoContext=createContext({
   Todos:[
      {
        id:1,
        text:'todo',
        checked:false
      }
   ],
   addTodo: (todo)=>{},
   updateTodo: (id,todo)=>{},
   deleteTodo:(id)=>{},
   toggleChecked:(id)=>{}
})

export const useTodo=()=>{
     return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider

