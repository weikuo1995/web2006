const express = require('express');
const router = express.Router();
const sqlFn = require('./mysqlConfig');
const jwt = require('jsonwebtoken');
const config = require('./config');

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = "select * from user where user_name=? and password=?"
    const arr = [username, password];
    sqlFn(sql, arr, result => {
        console.log(result);
        if (result.length > 0) {
            const token = jwt.sign({
                id: result[0].id,
                username: result[0].username
            }, config.jwtSecret);
            res.status(200).json(token)
        } else {
            res.status(401).json({
                errors: "用户名或密码错误"
            })
        }
    })
})
module.exports = router;