const webpack = require('webpack')
const path = require("path");
module.exports = {
    // 基本路径
    // publicPath: process.env.NODE_ENV === 'production'
    //   ? './'
    //   : './',
    publicPath: './',
    chainWebpack: config => {
        config
            .entry('index')
            .add('babel-polyfill')
    },
    // 输出文件目录
    outputDir: 'dist', // 默认dist
    // 用于嵌套生成的静态资产（js,css,img,fonts）目录
    // assetsDir: '',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: 'index.html', // Default: 'index.html'
    filenameHashing: true,
    // 构建多页时使用
    pages: undefined,
    // eslint-loader是否在保存的时候检查
    lintOnSave: true,
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    // configureWebpack: config => {
    //   if (process.env.NODE_ENV === 'production') {
    //     // 为生产环境修改配置...

    //   } else {
    //     // 为开发环境修改配置...
    //   }
    // },
    configureWebpack: {
        //     plugins: [
        //       new webpack.ProvidePlugin({
        //         $:"jquery",
        //         jQuery:"jquery",
        //         "windows.jQuery":"jquery"
        //       })
        //     ],
        //     externals: {
        //       "BMap": "BMap"
        //     }
    },
    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    chainWebpack: config => {
        config.resolve.alias.set('@', path.join(__dirname, 'src'));
        /*config.module
          .rule('images')
          .use('url-loader')
            .loader('url-loader')
            .tap(options => {
              // 修改它的选项...
              return options
            })*/
    },
    // css相关配置
    css: {
        // 启用 CSS modules
        // requireModuleExtension: true,  // 配置为false element-ui样式失效
        // 是否使用css分离插件
        // extract: true, // 此参数会导致编辑css过后，热加载失效
        // 开启 CSS source maps?
        // sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // 配置sass全局变量
            sass: {
                prependData: `
                    @import "src/styles/_variables.scss";
                `
            }
        },
    },
    // webpack-dev-server 相关配置
    devServer: {
        // disableHostCheck: true,
        host: '0.0.0.0',
        port: 9999,
        // https: false,
        // open: true,
        // hotOnly: false,
        // proxy: {
        //     '/api': {
        //         target: 'http://1a4feaf6-7843-4c21-8de3-e236c85f1a5c.mock.pstmn.io',  // 要访问接口的域名
        //         // secure: false,  // 如果是https接口，需要配置这个参数
        //         // changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        //         pathRewrite: {
        //             '^/api': '/' // 重写接口访问
        //         }
        //     }
        // },
        before: app => {},
    },
    // runtimeCompiler: true,
    // PWA 插件相关配置
    pwa: {},
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}