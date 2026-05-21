import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "mayank",
    age: 23
  }

  let newArr = [1, 2, 3, 4, 5]

  return (
    <>
      <h2 className='bg-green-800 text-black p-4 rounded-xl mb-4'>Tailwind test</h2>
      <Card channel="Nature lens by mayank" someObject={myObj}/>
      <Card channel="Nature lens by mayank" someObject={newArr}/>
    </>
  )
}

export default App