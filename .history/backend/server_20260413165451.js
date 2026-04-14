import express from 'express';   // type module with import express
const app = express();

app.get('/',(req,res)=>{
     res.send("server is ready");
});

app.get('/jokes',(req,res)=>{
const jokeData = {
  jokes: [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why do Java developers wear glasses? Because they don't C#",
    "Why did the developer go broke? Because he used up all his cache",
    "How many programmers does it take to change a light bulb? None, that's a DevOps problem now"
  ]
};
    res.json(jokedata);
})
const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`) // use ``
});
