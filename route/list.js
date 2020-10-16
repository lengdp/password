const express=require('express');
const Password = require('../model/table');
const list=express.Router();

list.get('/',async (req,res)=>{
    let password= await Password.find();
    res.render('list.art',{password:password});
})
list.get('/remove',async (req,res)=>{
    await Password.findOneAndDelete({time:req.query.time});
    res.writeHead(301,{
        Location:'/list'
    })
    res.end();
})
module.exports=list;