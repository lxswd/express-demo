//express综合处理模块
const api = require('./api');
var http = require('http')

//解析前端发送来的数据
// const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//创建 application/json 解析,处理跨域
app.all('*', function(req, res, next) { // 先后顺序一定要对！！！
  // res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild, ');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By", ' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  // res.header("Content-Type", "application/x-wwww-form-urlencoded;charset=utf-8");
  next();
});
app.use(express.json());
// 创建 application/x-www-form-urlencoded 解析
app.use(express.urlencoded({extended: false}));
app.use(api);



app.use((req,res) => {
  
})
const port = 3000;
app.listen(port, () => {
    console.log('Express server listening on port ' + port);
  });
