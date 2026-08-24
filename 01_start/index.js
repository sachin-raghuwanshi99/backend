const express = require('express');

const app = express();

app.get("/about",(req,res) => {
    res.send("about page")
})

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(3000);