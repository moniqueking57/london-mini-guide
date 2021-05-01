const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const messages = 'Hi';

app.get('/', function (req, res) {
  res.send(messages);
});

app.listen(process.env.PORT || 8081, () => {
  console.log('Server is working');
});
