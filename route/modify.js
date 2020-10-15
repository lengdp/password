const express=require('express');
const Password = require('../model/table');
const modify=express.Router();

modify.get('/',async (req,res)=>{
    let account=await Password.findOne({time:req.query.time})
    res.render('modify.art',{account:account});
})
module.exports=modify;