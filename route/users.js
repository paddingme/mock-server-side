var jwt = require('jsonwebtoken');
var config = require('../config');
exports.signin = function(req, res) {
    //  这里写死用户名密码 
    var user = {
        "username": "admin",
        "password": "adminoa"
    }
    var username = req.body.username;
    var password = req.body.password;
    if (username != user.username) {
        res.json({
            success: false,
            message: '!!!认证失败======>用户未找到!'
        });
    } else if (password != user.password) {
        res.json({
            success: false,
            message: '认证失败======>密码错误！'
        });
    } else {
        //  注意这里必须写成"user":user.username 否则过期验证不成功
        //  见 http://stackoverflow.com/questions/23626823/json-web-token-does-not-expire
        var token = jwt.sign({"user":user.username}, config.secretToken, {
            expiresIn: config.TOKEN_EXPIRATION
        });
        res.json({
            success: true,
            message: 'token 已加上',
            token: token
        });
    }
}

exports.logout = function(req, res) {
 // 这里的 req.user 是 express-jwt 生成的 包含 {user: iat: exp}
    if (req.user) {
        delete req.user;
        res.json({
            logout: true,
            message: "退出成功。。。"
        })
    } else {
        return res.send(401);
    }
}
