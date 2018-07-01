import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',

    entry: path.join(__dirname, '/client/index.js'),
    output: {
        filename: 'bundle.[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                use: [ 'babel-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html'
        })
      ],
}