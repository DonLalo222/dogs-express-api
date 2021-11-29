
const express = require('express');
const app = express();
const port = 3000;

const dogs = require('./routes/dogs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// routes
app.use('/dogs', dogs);

app.listen(port, () => {
  console.log(`Api listening at http://localhost:${port}`)
})