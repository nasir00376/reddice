import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

// WebpackMiddleware takes compiler as webpack and which webpack config file
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/public/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});

// console.log('tick')