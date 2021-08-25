//express综合处理模块
const api = require('./api');
var http = require('http')

//解析前端发送来的数据
// const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//创建 application/json 解析,处理跨域
app.all('*', function(req, res, next) { // 先后顺序一定要对！！！
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,application/x-wwww-form-urlencoded");
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
