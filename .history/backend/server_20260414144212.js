import express from 'express';   // type module with import express
const app = express();

app.get('/',(req,res)=>{
     res.send("server is ready");
});

app.get('/api/jokes',(req,res)=>{
const jokes= [
  {
    id: 1,
    title: "Dark Mode",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "Light Bulb",
    content: "How many programmers does it take to change a light bulb? None, that's a hardware problem."
  },
  {
    id: 3,
    title: "Java Glasses",
    content: "Why do Java developers wear glasses? Because they don't C#"
  },
  {
    id: 4,
    title: "Cache",
    content: "Why did the developer go broke? Because he used up all his cache"
  },
  {
    id: 5,
    title: "DevOps Problem",
    content: "How many programmers does it take to change a light bulb? None, that's a DevOps problem now"
  }
];
    res.json(jokes);
})
const port = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log(`server is running on http://localhost:${port}`) // use ``
});
