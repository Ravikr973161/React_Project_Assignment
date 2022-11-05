const express = require('express')
const app = express()
const port = 3000



app.get('/', (req,res)=>{
    res.send('Hello Js camp 1.0!')
})

app.get("/ravi", (req,res)=>{
    res.send('Instagram')
})

app.get("/features",(req,res)=>{
    // res.send('A test runner built for humans v-0')
    res.status(200).send('A test runner built for humans')
})

app.get("/insta",(req,res)=>{
    const insta={
        UserName:"Ravikr",
        followers: 70,
        follow:300
    }
    res.status(200).json({insta})
})

app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token)
    res.status(200).json({param : req.params.token})
})

app.listen(port, ()=>{
 console.log(`Example app listening on port ${port}`)
})