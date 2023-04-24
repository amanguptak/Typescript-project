import { Dispatch, ReactNode, SetStateAction, useState } from "react"
import { createContext } from "vm"

export type User = {
    name:string 
    email:string
}
export interface IUserContext{
    user:User,
    setUser:Dispatch<SetStateAction<User>>
}

const defaultState ={
    user:{
        name:"",
        email:""
    },
    setUser:(user:User) =>{}
}as IUserContext

export const UserContext = createContext(defaultState)

type UserProvideProps ={
    children:ReactNode
}

export default function UserProvider({children}:UserProvideProps){
  const[user,setUser]=useState<User>({
    name:"",
    email:""
  });
  return (
   < UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}