import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
   const [jokes,setjokes] = useState([])
   useEffect(()=>{
    axios.get('/api/jokes') // axios handle all formate json , take data from backend

    .then ((response)=>{
      console.log(response.data)
      setjokes(response.data) 
    })
    .catch((error)=>{
      console.log(error)
    })
   },[])// dependency - not in infinity loop

  return (
     <div>
     <h1> chai and fullstack</h1>
     <p>jokes:{jokes.length}</p>
     {  
      jokes.map((joke)=>(
        <div key={joke.id} >
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
         </div>
      )) 

     }
     </div>
  )
}

export default App
