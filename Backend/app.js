const express=require('express');
const mongoose =require('mongoose');
const User=require('./routes/user');
const Car=require('./routes/car')


const app=express();
const port=4000;


const url='mongodb://127.0.0.1/express';
mongoose.connect(url,{useNewUrlParser:true});

const con =mongoose.connection;

con.on("open",()=>{
    console.log("mongodb connected");
});


app.use(express.json());
app.use('/user',User);
app.use('/car',Car);

app.listen(port,()=>{
    console.log(`starting on ${port}`);
});
