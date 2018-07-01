import express from 'express';
import path from 'path';

const app = express();

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});