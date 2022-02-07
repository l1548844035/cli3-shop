const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    chainWebpack:config=>{
        config.resolve.alias
        //设置路径别名用.set()方法
        //第一个参数为起的别名，第二个参数为全部的路径
        .set('@',resolve('./src'))
        .set('img',resolve('./src/assets/img'))
        .set('components',resolve('./src/components'))
        .set('views',resolve('./src/views'))
        .set('assets',resolve('./src/assets'))
        .set('network',resolve('./src/network'))
    },
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    devServer:{
        port:80,
        // host:'139.155.247.207'
    }
}