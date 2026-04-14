import express from 'express';   // type module with import express
const app = express();

app.get('/',(req,res)=>{
     res.send("server is ready");
});
app.get('/jokes',)
const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`) // use ``
});
