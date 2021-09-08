const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }

                }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js'],
    },
    devServer: {
        open: true,
        port: 8080,
        static: {
            directory: path.join(__dirname, 'dist'),
        }
    },
};
