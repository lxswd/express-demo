const jwt = require('jsonwebtoken')
const jwtKey = 'liyue';//（ token生成的密匙，根据自己需求定义）
const jwtSign = (data) => {
    const token = jwt.sign(data,jwtKey,{
        expiresIn:60*60,// token生成函数，有效时间为一个小时
    })
    return token
}

const jwtCheck = (req,res,next)=>{ // token验证函数
    const token = req.headers.authorization
    jwt.verify(token,jwtKey,(err,data)=>{
        if(err){
            console.log(err)
            res.send({
                code:'99999',
                msg:'token无效',
                data:[]
            })
        }else{
            req.jwtInfo = data;
            next()
        }
    })
}

module.exports = {
    jwtSign,
    jwtCheck
}
