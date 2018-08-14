module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://hn2.api.okayapi.com',
                changeOrigin: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}
// // .env.development
// VUE_APP_BASE_API=/api