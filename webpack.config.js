let path = require('path');
let webpack = require('webpack');
let WebpackOnBuildPlugin = require('on-build-webpack');

let liveServer = require('live-server');

let params = {
    root: './dist',
    file: 'index.html',
    wait: 100,
    port: 8080
};

let serverStarted = false;

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'file-loader?name=[name].[ext]&outputPath=./' },
                    { loader: 'extract-loader'},
                    { loader: 'html-loader?' + JSON.stringify({ attrs: [] })}
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        new WebpackOnBuildPlugin(function(stats) {
            if(serverStarted) return;
            liveServer.start(params);
            serverStarted = true;
        }),
    ]
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                comments: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}