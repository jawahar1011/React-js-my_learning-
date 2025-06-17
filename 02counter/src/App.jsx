import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addValue =() => {
    setCount(count + 1)
  }
  const removevalue = ()=>{
    setCount(count-1)
  }

  return (
    <>
      <h1>Lets learn about hooks</h1>
      <h2>Counter value {count}</h2>
      <button
      onClick={addValue}>Add Value {count}</button>
      <button
      onClick={removevalue}>Remove Value {count}</button>
      <h2>footer:{count}</h2>
    </>
  )
}

export default App
