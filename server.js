const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(__dirname));
app.use(express.json());

app.post('/feedback',(req,res)=>{
    const {name,message}=req.body;
    console.log(`Feedback recieved from ${name}:${message}`);
    res.send('Thank You for Your Feedback!');
});
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});
