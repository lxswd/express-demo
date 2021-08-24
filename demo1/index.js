const http = require('http')
const api = require('./api')
const express = require('express')
// const bodyParser = require('body-parser')    //已弃用express已在内部实现post解析库的支持
const app = express()

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","http:localhost:8080")
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Methods","GET,POST,PUT,HEAD,OPTIONS")
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with, Content-Type, Accept, Authorization")
    next()
})
// app.use(bodyParser.json());  //已弃用express已在内部实现post解析库的支持
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(api);

app.use((req, res)=>{

})

const port = 3000;
app.listen(port,()=>{
    console.log('express server start at port 3000')
})

