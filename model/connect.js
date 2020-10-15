//连接数据库
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/password',{useNewUrlParser:true,useUnifiedTopology:true})
        .catch(()=>{console.log('数据库连接失败')});
