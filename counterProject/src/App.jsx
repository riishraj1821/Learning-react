import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] =useState(5);

  //let counter = 5;
  const addValue = () =>{ 
 // counter ==counter+1 
 if(counter<20){setCounter(counter+1)}
    else{
      setCounter(counter=20);
    } 
  }

  const DecreaseValue = () =>{ 
    if(counter<0){setCounter(counter-1);}
    else{
      setCounter(counter=0);
    }
    
  }  
  return (
    <>
      <h1>chai or react </h1>
      <h2>counter value: {counter}</h2>

      <button className='Addbtn' onClick={addValue}>Add Value {counter}</button><br/>  
      <button className='Decreasebtn' onClick={DecreaseValue}>Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
