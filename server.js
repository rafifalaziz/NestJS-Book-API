'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Worldss');
});

app.get('/testing', (req, res) => {
  res.send('Im just too');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});