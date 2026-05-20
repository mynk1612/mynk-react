import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
//import {jsx as _jsx} from 'react/jsx-runtime'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App </h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//       href: 'https://google.com',
//       target: '_blank'
//     },
//     Children: 'Click me to visit Google'
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>
    Visit Google 
  </a>
)
const anotherUser = "lens with mynk"

const reactElement = React.createElement(
   'a',
   {
     href: 'https://google.com',
     target: '_blank'
   },
   'Click me to visit Google',
    anotherElement)

ReactDOM.createRoot(document.getElementById('root')).render(
  /*
  <StrictMode>
    <ReactElement />
  </StrictMode>,*/

  // anotherElement,
  // reactElement
  // <App />
  reactElement
)