const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const auth = require('./auth');

//解析json格式的数据
app.use(bodyParser.json());
//解析表单格式的数据
app.use(bodyParser.urlencoded({extended:true}));

//路由
app.use('/api',auth);
app.listen(5000,()=>{
    console.log(5000);
})