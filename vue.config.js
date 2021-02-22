module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.31.110:8888/api/private/v1',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}