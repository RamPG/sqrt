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
