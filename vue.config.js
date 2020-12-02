module.exports = {
    devServer: { 
        proxy: {
            '/api': {     //这里最好有一个 /
                target: 'http://localhost:5000',  // 后台接口域
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}