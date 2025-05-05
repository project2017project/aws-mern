const express = require("express");
const app = express();
require('dotenv').config();


app.get('/api/get',(req,res) => {
    res.send({ message: "hello" });
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"satyam",
            age:22,
            contact:12254
        },
        env:process.env.NAME
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});
