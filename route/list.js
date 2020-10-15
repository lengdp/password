const express=require('express');
const url=require('url');
const querystring=require('querystring');
const Password = require('../model/table');
const list=express.Router();

list.get('/',async (req,res)=>{
    let password= await Password.find();
    res.render('list.art',{password:password});
})
list.get('/remove',async (req,res)=>{
    const {pathname,query}=url.parse(req.url,true);
    await Password.findOneAndDelete({time:req.query.time});
    res.writeHead(301,{
        Location:'/list'
    })
    res.end();
})
module.exports=list;