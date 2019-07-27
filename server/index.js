const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;

const router = require('./router');


app
  .use(cors())
  .use(express.json())
  .use(router);


app.listen(port, () => {
  console.log(` server listening on port ${port}`);  //eslint-disable-line no-console
});