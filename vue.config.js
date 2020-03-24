module.exports = {
    publicPath: './', // 部署应用包时的基本 URL
    outputDir: 'dist', // 生产环境构建文件的目录
    assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    lintOnSave: false, // 是否开启eslint保存检测
    transpileDependencies: [], // 如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建

    // 开发环境下将 API 请求代理到 API 服务器
    devServer: {
        port: 2342,
        open: true,
        // proxy: {
        //     '/webapi': {
        //         target: 'https://testapi.airtu.me:4420',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/webapi': ''
        //         }
        //     }
        // }
    },
};