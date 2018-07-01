import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpack from 'webpack';

export default {
    mode: 'development',

    entry: [
        'webpack-hot-middleware/client', 
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        // Error messages in more cleaner way
        new webpack.NoEmitOnErrorsPlugin(),
        // Ensures consist builds hashes
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
          template: 'public/index.html'
        })
      ],
}