const mongoose = require('mongoose');
// 通过useNewUrlParser: true解决当前URL解析器被废弃警告
mongoose.connect("mongodb://127.0.0.1:27017/userdemo",{useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error',(error)=>{
    console.log("mongo error is :"+error);
})

db.on('open',()=>{
    console.log("connection successed");
})

const loginSchema = mongoose.Schema({
    name:String,
    password:String
})

const registerSchema = mongoose.Schema({
    name:String,
    password:String,
    phone:String
})

const Models = {
    login: mongoose.model("user",loginSchema ),
    register:mongoose.model("register",registerSchema)
    // command_list:mongoose.model("command_list",commandListSchema),
    // bmi_list:mongoose.model('bmi_list',BMIListSchema)
}

module.exports = Models
