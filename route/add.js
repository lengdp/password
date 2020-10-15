const express=require('express');
const bodyParser=require('body-parser');
const Password = require('../model/table');
const add=express.Router();

add.get('/',(req,res)=>{
    res.render('add.art');
})

add.post('/',async (req,res)=>{
    await Password.create(req.body);
    res.writeHead(301,{
        Location:'/list'
    })
    res.end();
})
module.exports=add;