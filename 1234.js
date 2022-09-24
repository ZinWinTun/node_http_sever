const express = require('express');
const app = express();

app.get("",(req,res)=>{
    res.send("<h1>Hello Express Web Sever Using Node.js</h1>");
})

app.get("/Home", (req,res)=>{
    res.send("<h1>This Is Home Page</h1>")
})

app.get("/About", (req,res)=>{
    res.send("<h1>This Is About Page</h1>")
})

app.get("/Service", (req,res)=>{
    res.send("<h1>This Is Service Page</h1>")
})



app.listen(1234,()=>{
    console.log("sever is listening 1234")
})
