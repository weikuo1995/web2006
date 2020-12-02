const mysql = require('mysql');
//创建连接
const client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'wk'
})

//执行查询结果以回调函数带走    
function sqlFn(sql, arr, callback) {
    client.query(sql, arr, (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        callback(result)
    })
}
module.exports = sqlFn;