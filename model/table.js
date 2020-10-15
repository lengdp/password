const { Mongoose } = require("mongoose");

//创建表规则
const mongoose=require('mongoose');
const rule=new mongoose.Schema({
    time:{
        type:String
    },
    website:{
        type:String,
        required:true,
        minlength:1
    },
    username:{
        type:String,
        required:true,
        minlength:1
    },
    password:{
        type:String,
        required:true,
        minlength:1
    },
    description:{
        type:String,
        required:false
    }
})

//创建表
const Password=mongoose.model('Password',rule);
//将创建的表的构造函数导出
module.exports=Password;