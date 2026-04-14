// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from 'react'
import './App.css'

function App() {
   const [joke ,setjokes] = useState([])

  return (
     <h1> chai and fullstack</h1>
     <p>joke = {joke.length}</p>
  )
}

export default App
