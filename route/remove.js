const express=require('express');
const Password = require('../model/table');
const remove=express.Router();

remove.get('/',async (req,res)=>{
    await Password.findOneAndDelete({time:req.query.time});
    res.writeHead(301,{
        Location:'/list'
    })
    res.end();
})
module.exports=remove;