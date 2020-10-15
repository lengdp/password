const express=require('express');
const index=express.Router();

index.get('/',(req,res)=>{
    res.render('index.art');
})
module.exports=index;