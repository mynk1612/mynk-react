import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // hooks 
  let [counter, setCounter] = useState(15) 

  // let counter = 15

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1 
    setCounter(counter + 1) 
  }

  const removeValue = () => {
    counter = counter - 1
    // console.log("Value removed", counter)
  }

  return (
 <>
    <h1>lens with mayank </h1>
    <h2>counter value: {counter}</h2>

    <button
    onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>remove value</button>
 </>
  )
}

export default App
