const models = require("./db");
const express = require("express");
const router = express.Router();

const bcrypt = require('bcrypt');//密码加密


const { jwtSign, jwtCheck } = require('./jwt');



var ObjectId = require('mongodb').ObjectID;

//register
router.post('/api/user/register', (req, res) => {
    models.register.find({
        name: req.body.name
    }, (err, data) => {
        if (err) {
            res.send({
                'status': 1002,
                'message': '查询失败',
                'data': err
            });
        } else {
            console.log('查询成功' + data);
            if (data.length > 0) {
                res.send({
                    'status': 1001,
                    'message': '用户已存在',
                })
            } else {
                const hashPwd = bcrypt.hashSync(req.body.password, 10);
                let newUser = new models.login({
                    name: req.body.name,
                    password: hashPwd,
                    phone:req.body.phone
                })
                newUser.save((err, data) => {
                    if (err) {
                        res.send({
                            'status': 1002,
                            'message': '注册失败',
                            'data': err
                        })
                    } else {
                        res.send({
                            'status': 1000,
                            'message': '注册成功',
                        })
                    }
                })
            }
        }
    })
})

//login
router.post('/api/user/login', (req, res) => {
    models.login.find({ name: req.body.name }, (err, data) => {
        console.log(data)
        if (data.length <=0) {
            res.send({
                'status': 1004,
                'message': '用户未注册',
                'data': []
            })
        } else {
            let isPwdVaild = bcrypt.compareSync(req.body.password, data[0].password)
            if (isPwdVaild) {
                const token = jwtSign({ _id: data[0]._id });
                if (data.length > 0) {
                    res.send({
                        'status': 1000,
                        'message': "登录成功",
                        'data': {
                            token: token,
                            _id: data[0]._id
                        }
                    })
                } else {
                    res.send({
                        'status': 1001,
                        'message': "登录失败,该用户没有注册",
                        'data': err
                    })
                }
            } else {
                res.send({
                    'status': 1003,
                    'message': "密码错误",
                    'data': []
                })
            }
        }

    })
})


module.exports = router;
