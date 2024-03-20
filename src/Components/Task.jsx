import React, { useState } from 'react'
import { useTodo } from '../Context'


const Task = ({item}) => {
  const [ischecked, setischecked] = useState(false)
  const [text, settext] = useState(item.text)
  const [iseditable, setiseditable] = useState(false)
  const {deleteTodo,updateTodo,toggleChecked} =useTodo()
  console.log(ischecked);
  return (
          <div className='bg-orange-500 flex justify-between items-center px-4 py-2  text-white mb-3' style={item.checked?{backgroundColor:'gray'}:null}>
         <div className='flex items-center gap-2'>
            {!iseditable && <input type="checkbox" checked={item.checked} onChange={()=>{
              toggleChecked(item.id)
              setischecked(!ischecked)
            }}/>}
            {iseditable ? <input type="text" value={text} className='bg-transparent font-bold outline-none border w-32 rounded-lg px-2 py-1' autoFocus onChange={(e)=>settext(e.target.value)}/> : <b style={item.checked?{textDecoration:'line-through',color:'black'}:null}>{text}</b>}
         </div>
        <div className='flex gap-4'>
            {iseditable?<button className='bg-gray-500 p-1 rounded-lg' onClick={()=>updateTodo(item.id,setiseditable,text)}>📁</button>:<button className='bg-green-500 p-1 rounded-lg' onClick={()=>!ischecked && setiseditable(true)} style={ischecked?{opacity:'0.5'}:null}>✏️</button>}
            <button className='bg-green-500 p-1 rounded-lg' onClick={()=>deleteTodo(item.id)} >❌</button>
        </div>
    </div>
  )
}

export default Task