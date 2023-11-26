const path = require("path");
const express = require("express");


const app = express(); 

app.get("/",(req,res)=> {
    res.send("MERHABA BEN FİRDEVS TOPALOĞLU")
})


app.listen(process.env.PORT || 5000, ()=> {
    console.log("server");
  })