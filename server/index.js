import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

const app = express();

// WebpackMiddleware tackes compiler as webpack and which webpack config file
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/public/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});