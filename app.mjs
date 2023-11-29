import express from 'express';

import connectToDatabase from './Docker/Helpers.mjs/index.js'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

await connectToDatabase();

app.listen(3000);
