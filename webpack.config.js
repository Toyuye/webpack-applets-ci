
const Webpack = require('webpack')
const Fs = require('fs')
const Path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebapckPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
function assetsPath (_path){
    return path.posix.join('static', _path)
}


function resolvePath(dir) {
    return path.join(__dirname, '.', dir)
}

module.exports = {
    entry: [],
    output:__dirname,
    mode: 'development',
    watch: true,
    watchOptions: {

    },
    module:[],
    plugins: [],
    optimization:{
        minimizer:[
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsWebpackPlugin()
        ],
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            automaticNameMaxLength: 30,
            name: true,
            cacheGroups: {
                vendors: {
                    name:'vendor',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks:'all'
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    resolve: {

    }
  
}

