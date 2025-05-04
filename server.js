const express = require("express");
const app = express();


app.get('api/get',(req,res) => {
    res.send({message: "hello"})
})

app.listen(8000,()=>{
    console.log("listing to 8000");
})