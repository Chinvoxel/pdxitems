const webpack = require("webpack");
const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'), //入口文件
    output: {
        path: path.join(__dirname, './dist'), //输出路径
        filename: 'bundle.js' //文件名称
    },
    plugins: [ //所有webpack插件的 配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件路径
            filename: 'index.html' //设置生成的html文件名
        }),
        new VueLoaderPlugin(),

        new webpack.ProvidePlugin({ // 将 $ 变成全局变量
            $: 'jquery',
            jQuery: 'jquery',
            Popper: ['popper.js', 'default'] // bootstrap 中的一些组件依赖
        })
    ],


    module: { //配置所有第三方loader模块的
        rules: [ //第三方模块的规则
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, //处理 css 文件的 loader
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, //处理less
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader?limit=1888&name=[hash:8].[name].[ext]'
            },

            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            }, //处理字体文件的规则
            //配置babel来转换 ES6,7高级语法
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: { //修改vue被导入时候的包的路径   
            "vue$": "vue/dist/vue.js",
        }
    }
}