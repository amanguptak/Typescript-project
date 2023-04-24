import React from 'react';

import './App.css';
import PersonList from './components/PersonList';
import Greet from './components/Greet';
import States from './components/States';
function App() {
const nameList = [

  {
    first:"Aman",
    last:"Gupta"
  },
  {
    first:"Satyam",
    last:"Gupta"
  },
  {
    first:"Anamika",
    last:"Gupta"
  }
]

  return (
    <div className="App">
    
        <h4>typescript demo by aman</h4>
        <Greet name='Aman' counters={16} isLoggedIn = {true} status="coder"/>
        <Greet name='Satu' counters={12} isLoggedIn = {true} status="coder"> 
         <span style={{color:"green"}}>Anime</span>
        
        </Greet>
        <PersonList names = {nameList}/>
        <States/>
    </div>
  );
}

export default App;
