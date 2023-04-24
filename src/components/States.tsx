import React, { useState } from 'react'

const States = () => {
  const [todo ,setTodo]= useState("")
  const [todoList,setTodoList]= useState<string[]>([])

  const handlechange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTodo(e.target.value)
  }
   const addTodo = ()=>{
    setTodoList([...todoList,todo])
    setTodo("")
   }
  return (
    <div>
      <input type="text"
       placeholder='type todo'
      value={todo}
      onChange ={handlechange}
      />

      <button onClick={addTodo}>Add</button>


      <div>
    {
      todoList.map(item=>{
        return <li key={item}>{item}</li>
})
         
}
    

      </div>
    </div>
  )
}

export default States