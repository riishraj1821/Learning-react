import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);


  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(charAllowed) str+="!@#$%^&*(){[]}";
    if(numberAllowed) str+="0123456789";

    for (let i = 1; i<= length; i++) {
    let char =Math.floor( Math.random()*str.length+1)
    pass += str.charAt(char);
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed,setPassword])


  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])
  

   useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg  px-2 py-3 my-8   bg-gray-800 text-orange-500  text-center '>
        <h1 className='text-white '>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-1'>
          <input 
          type="text"
          placeholder='Password'
          className='outline-none w-full py-1 px-3 bg-white'
          value={password}
          readOnly
          ref={passwordRef}
          />
           <button onClick={copyPassword()} className='bg-cyan-900 text-center text-white px-2 text-l py-2 shrink-0 outline-none'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength((e).target.value)}}
             />
             <label className='' >length:{length}</label>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{setnumberAllowed((prev => !prev))}}
               />
            </div>
            <label className=''>Numbers</label>

            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id='CharInput'
              onChange={()=>{setCharAllowed((prev => !prev))}}
               />
            </div>
            <label className=''>Charactors</label>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
