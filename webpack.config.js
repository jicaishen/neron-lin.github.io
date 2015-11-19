/**
 * Author :  neron
 * time   : 2015/11/18
 * description: ...
 */
var webpack = require('webpack');
var path = require('path');

var commonsPlugin =
    new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        app: './app.js',
        index: './index.js'
    },
    output: {
        path: './public/js',
    //  publicPath: '/js/',
        filename: '[name].js'
    },
/*    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, './app.js')
    ],
    output: {
        path: './public/js',
        //  publicPath: '/js/',
        filename: 'bundle.js'
    },*/
    module: {
        loaders: [
            { test: /\.coffee$/, loader: 'coffee-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // 用 ! 来连接多个人 loader
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        // 现在可以写 require('file') 代替 require('file.coffee')
        extensions: ['', '.js', '.json', '.coffee']
    },
    plugins: [commonsPlugin]
};