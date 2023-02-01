const express = require('express');
const connect = require('./schemas/index');

const app = express();

connect();

app.use('/', (req, res) => {
  res.send('ok');
});

app.listen(5000, () => {
  console.log('server is running');
});
