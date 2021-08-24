const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/userdemo')
const db = mongoose.connection

db.on('error', (err)=>{
    console.log('mongo error is: '+err)
})

db.on('open', ()=>{
    console.log('connection successed')
})

const loginSchema = mongoose.Schema({
    name: String,
    password: String
})

const registerSchema = mongoose.Schema({
    name: String,
    password: String,
    phone: String
})

const Models = {
    login: mongoose.model('user',loginSchema),
    register: mongoose.model('register', registerSchema)
}

module.exports = Models