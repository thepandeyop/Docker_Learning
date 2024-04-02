const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;
app.get('/', (req,res)=>{
return res.json({message: "hey this is just a message"});
})  
app.listen(PORT, ()=>{
    console.log(`server is listen at ${PORT}`);
})