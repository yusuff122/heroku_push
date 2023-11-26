const path = require("path");
const express = require("express");


const app = express(); 

app.get("/",(req,res)=> {
    res.json({
        message: "Hoş geldiniz"
    })
})


app.listen(process.env.PORT || 5000, ()=> {
    console.log("server");
  })