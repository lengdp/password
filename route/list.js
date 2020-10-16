const express=require('express');
const Password = require('../model/table');
const list=express.Router();

list.get('/',async (req,res)=>{
    let password= await Password.find();
    res.render('list.art',{password:password});
})
module.exports=list;