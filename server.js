const express = require("express");
const app = express();


app.get('api/get',(req,res) => {
    res.send({message: "hello"})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"satyam",
            age:22,
            contact:12254
        },env:process.env.NAME
    })
});

app.listen(8000,()=>{
    console.log("listing to 8000");
})