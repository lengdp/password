const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const index=require('./route/index');
const add=require('./route/add');
const list=require('./route/list');
const modify=require('./route/modify');
require('./model/connect')
require('./model/table')

const main=express();
main.engine('art',require('express-art-template'));
main.set('views',path.join(__dirname,'views'));
main.use(express.static(path.join(__dirname,'public')));

main.use(bodyParser.urlencoded({extended:false}));
main.use('/',index);
main.use('/add',add);
main.use('/list',list);
main.use('/modify',modify);

main.listen(3000);
console.log('running……');