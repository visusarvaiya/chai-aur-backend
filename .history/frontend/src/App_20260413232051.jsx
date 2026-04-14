// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
   const [jokes ,setjokes] = useState([])
   useEffect(()=>{
    axios.get('http://localhost:3000') // axios handle all formate json , take data from backend

    .then ((response)=>{
      setjokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
   })

  return (

     <h1> chai and fullstack</h1>
     <p>jokes:{jokes.length}</p>
     {  
      jokes.map((joke, index)=>{
        <div key={joke.id} >
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
         </div>
      }) 

     }
  )
}

export default App
