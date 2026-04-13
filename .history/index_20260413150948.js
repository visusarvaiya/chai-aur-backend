require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/great',(req,res)=>{
    res.send("<h1>welcome to my page</h1> ")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
// above we amde is server 