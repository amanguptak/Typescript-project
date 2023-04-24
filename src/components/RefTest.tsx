import React, { useRef, useState } from 'react'

const RefTest = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [todoList,setTodoList]= useState<string[]>([])

//   const handlechange =(e:React.ChangeEvent<HTMLInputElement>)=>{
//     setTodo(e.target.value)
//   }
   const addTodo = ()=>{
    if(inputRef.current){
        const todo = inputRef.current.value
        setTodoList([...todoList,todo])
    }
    
    
   }
  return (
    <div>
      <input type="text"
       placeholder='type todo'
        ref = {inputRef}
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

export default RefTest