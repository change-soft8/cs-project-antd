const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const SRC_PATH = path.resolve(__dirname, '../src');
const APP_PATH = path.resolve(__dirname, '../src/app.js');
const BUILD_PATH = path.resolve(__dirname, '__web__/');
const INDEX_FILE = path.resolve(__dirname, 'index.html');
const exec = require('child_process').exec;

module.exports = {

    entry: { 'web': [APP_PATH] },

    output: {
        path: __dirname + '/__web__',
        filename: '[name].[hash].page.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/__web__/'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.css$/, loader: 'style!css' }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=25000&name=/img/[hash:8].[name].[ext]',
                    'image-webpack?{progressive:true, arithmetic:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "1-5", speed: 10}}',
                ]
            }
        ]
    },

    // Expose __dirname to allow automatically setting basename.
    context: __dirname,
    node: {
        __dirname: true
    },
    plugins: [
        //共享文件
        new webpack.optimize.CommonsChunkPlugin('webshared.[hash].js'),
        // 根据文件大小排序
        new webpack.optimize.OccurrenceOrderPlugin(),
        // 对文件进行压缩
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        // 删除重复依赖包
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),

        //删除过期文件
        function() {

            // 删除过期的 shared 文件
            exec('rm -rf ' + BUILD_PATH + '/webshared*.js', function(err, out) {
                console.log(out);
                err && console.log(err);
            });
            exec('rm -rf ' + BUILD_PATH + '/*.page.js', function(err, out) {
                console.log(out);
                err && console.log(err);
            });

            // 插件执行完毕
            this.plugin('done', stats => {

                console.error('webpack plugin done: ' + JSON.stringify(arguments));
                // 读取 首页 html
                fs.readFile(INDEX_FILE, (err, data) => {
                    // 获得 html 文本
                    var html = data.toString();
                    // 替换 shared.hash.js 文本
                    html = html.replace(/webshared\.[^\.]+\.js/, 'webshared.' + stats.hash + '.js');
                    //替换page文本
                    html = html.replace(/\/__web__\/web\.(.+?)\.page\.js/g, '/__web__/web.' + stats.hash + '.page.js');
                    // 将新值，重写入首页
                    fs.writeFile(INDEX_FILE, html, err => {
                        !err && console.log('Set has success: ' + stats.hash);
                    });
                });
            });
        }
    ],
    // CDN 加载的外部文件
    externals: {
        // react 使用cdn加载
        'react': 'React',
        // react-dom 使用cdn加载
        'react-dom': 'ReactDOM',
        // react 路由
        'react-router': 'ReactRouter',
        //antdUI
        'antd': 'antd'
    }

}
