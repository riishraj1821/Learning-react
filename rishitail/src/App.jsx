import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let myName = ["Mitali","Roshni", "khushi", "Ria", "mehak"];



  return (
    <>
      <h1 className='text-[red] bg-green-400 rounded-xl mb-4 '>Hello world</h1>
      {myName.map((name, index) => (
        <Card key={index} userName={name} />
      ))}
    </>
  )
}

export default App
