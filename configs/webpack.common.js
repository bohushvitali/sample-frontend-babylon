const path = require('path');
const webpack = require('webpack');
const ROOT_DIR = path.resolve(__dirname, '../');
const SRC_DIR = path.resolve(ROOT_DIR, 'src');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

module.exports = {
    entry: {
        app: "./src/main"
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, DIST_DIR),
    },
    resolve: {
        modules: [
            'src',
            'node_modules',
        ],
        extensions: [".ts", ".js", ".glsl"],
        alias: {
            assets: path.resolve(ROOT_DIR, 'assets'),
        },
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.glsl$/,
                loader: 'webpack-glsl-loader'
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ]
};