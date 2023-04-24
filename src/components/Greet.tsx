import React, { Children } from 'react'

type Greetprops ={
  name:string
  isLoggedIn?:boolean
  counters?:number    //optional so use ?
  status?:'coder' | "single" | "commited"
  children?: React.ReactNode
}


export default function Greet({name ,children, counters, status,isLoggedIn}:Greetprops) {
  console.log(children,"Step1")
  return (
    <>
    <h1>
      
      { isLoggedIn ? <>{`Hello ${name} welcome to our website your count ${counters} 
      ${status} `} {children}</>
      : `Welcome Guest`}</h1>
    </>
  )}





// const Greet:React.FC<Greetprops> = ({name,counters,status,children}) => {
//   return (
//     <div>
//       <h1>Name-{name} {counters} {status} {children}</h1>
//     </div>
//   )
// }

// export default Greet


