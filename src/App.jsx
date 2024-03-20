import React, { useContext, useEffect, useState } from 'react'
import Task from './Components/Task'
import { TodoProvider } from './Context'

const getlocalstorage=()=>{
    let list=JSON.parse(localStorage.getItem('todo-items'))
    if(list){
        return list
    }else{
       return []
    }
}
const App = () => {
  const [inputval, setinputval] = useState('')
  const [todos, settodos] = useState(getlocalstorage)
   const addTodo=(todo)=>{
      settodos((prevals)=>([...prevals,{
          id:Date.now(),
          text:todo,
          checked:false
      }]))
      setinputval("")
      // console.log(todos);
   }
   const updateTodo=(id,setedit,task)=>{
       setedit(false)
       settodos((prevTodos) =>
       prevTodos.map((item) =>
         item.id === id ? { ...item, text:task } : item
       )
     );
   }
   const deleteTodo=(id)=>{
      settodos(todos.filter((item)=>item.id!=id))
   }
   const toggleChecked = (id) => {
      settodos((prevTodos) =>
        prevTodos.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      );
    };

    useEffect(()=>{
      localStorage.setItem('todo-items',JSON.stringify(todos))
    },[todos])
    
  return (
   <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleChecked}}>
        <div className='h-screen bg-zinc-800 text-black flex justify-center items-center'>
        <div className="card bg-blue-700 p-4 rounded-lg shadow-xl">
             <div className='flex gap-2'>
               <input type="text" placeholder='Enter your task' className='px-4 py-2 rounded-lg text-lg outline-none ' value={inputval} onChange={(e)=> setinputval(e.target.value)}/>
               <button className='bg-green-600 px-4 py-2 rounded-lg font-bold' onClick={()=> addTodo(inputval)}>Add</button>
             </div>
             <div className='my-4'>
                {todos.map((item)=>{
                   return <Task item={item} key={item.id}/>
                })}
             </div>
        </div>
    </div>
     </TodoProvider>
  )
}

export default App