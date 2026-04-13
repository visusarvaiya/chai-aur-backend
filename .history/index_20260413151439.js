require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubdta ={
"login": "user",
"id": 14959,
"node_id": "MDQ6VXNlcjE0OTU5",
"avatar_url": "https://avatars.githubusercontent.com/u/14959?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/user",
"html_url": "https://github.com/user",
"followers_url": "https://api.github.com/users/user/followers",
"following_url": "https://api.github.com/users/user/following{/other_user}",
"gists_url": "https://api.github.com/users/user/gists{/gist_id}",
"starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/user/subscriptions",
"organizations_url": "https://api.github.com/users/user/orgs",
"repos_url": "https://api.github.com/users/user/repos",
"events_url": "https://api.github.com/users/user/events{/privacy}",
"received_events_url": "https://api.github.com/users/user/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Ilya Solovyov",
"company": null,
"blog": "",
"location": "Saint Petersburg, Russia",
"email": null,
"hireable": null,
"bio": null,
"twitter_username": null,
"public_repos": 11,
"public_gists": 6,
"followers": 155,
"following": 8,
"created_at": "2008-06-25T06:56:09Z",
"updated_at": "2026-03-26T11:26:01Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/great',(req,res)=>{
    res.send("<h1>welcome to my page</h1> ")
})
app.get('/github',(req, res)=>{
    
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
// above we amde is server 