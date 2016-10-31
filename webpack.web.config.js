const path = require("path");
const webpack = require('webpack');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        './entry.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'url?limit=25000&name=/img/[hash:8].[name].[ext]',
                'image-webpack?{progressive:true, arithmetic:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "1-5", speed: 10}}',
            ]
        }]
    },
    //webpack-dev-server配置
    devServer: {
        host: '0.0.0.0',
        contentBase: __dirname,
        port: 3000,
        stats: {
            colors: true
        },
        hot: true
    },
    plugins: [
        //自动刷新
        new webpack.HotModuleReplacementPlugin(),
        //添加备注
        new webpack.BannerPlugin('develop for changeSoft'),
        // 自动打开浏览器
        new WebpackBrowserPlugin({
            browser: 'Chrome'
        })
    ],
    // CDN 加载的外部文件
    externals: {
        // react 使用cdn加载
        'react': 'React',
        // react-dom 使用cdn加载
        'react-dom': 'ReactDOM',
        // react 路由
        'react-router': 'ReactRouter',
        //antd UI
        'antd': 'antd'
    }
};
