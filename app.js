const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello to  my fellow fullstack engineer!');
});

app.get('/custom', (req, res) => {
  res.set('X-fsfe', 'FSFE custom header');
  res.status(418);
  res.send('Setting a custom header works!');
});

app.listen(port, () => console.log(`App started. Listening on port: ${port}`));
