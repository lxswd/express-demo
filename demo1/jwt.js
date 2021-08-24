const jwt = require('jsonwebtoken')
const jwtKey = 'liyue'  //token生成的密钥，根据自己需求定义

const jwtSign = (data)=>{
    const token = jwt.sign(data, jwtkey, {
        expiresIn: 60*60,   //token生成函数，有效时间为一个小时
    })
    return token
}

const jwtCheck = (req, res, next)=>{    //token验证函数
    const token = req.headers.authorization
    jwt.verify(token, jwtkey, (err, data)=>{
        if(err) {
            console.log(err)
            res.send({
                code: '00000',
                msg: 'token无效',
                data: []
            })
        } else {
            req.jwtInfo = data;
            next()
        }
    })
}

module.exports = {
    jwtSign,
    jwtCheck
}