const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const info = require('./stratford.js');

const data = {
  '/pharmacies': 'returns pharmacies list for stratford',
  '/colleges': 'returns colleges list for stratford',
  '/doctors': 'returns doctors list for stratford',
  '/hospitals': 'returns hospitals list for stratford',
};

app.get('/', function (req, res) {
  res.send(data);
});

app.get('/pharmacies', function (req, res) {
  res.send(info[0].pharmacies);
});

app.get('/colleges', function (req, res) {
  res.send(info[0].colleges);
});

app.get('/hospitals', function (req, res) {
  res.send(info[0].hospitals);
});

app.get('/doctors', function (req, res) {
  res.send(info[0].doctors);
});

// app.get('/pharmacies/:city', function (req, res) {
//   const city = req.params.city;
//   if (city.toLowerCase() === 'stratford') {
//     res.send(info[0].pharmacies);
//   } else if (city.toLowerCase() === 'harrow') {
//     res.send(info[1].pharmacies);
//   } else if (city.toLowerCase() === 'heathrow') {
//     res.send(info[2].pharmacies);
//   } else {
//     res.send('city not found');
//   }
// });

// app.get('/colleges/:city', function (req, res) {
//   const city = req.params.city;
//   if (city.toLowerCase() === 'stratford') {
//     res.send(info[0].colleges);
//   } else if (city.toLowerCase() === 'harrow') {
//     res.send(info[1].colleges);
//   } else if (city.toLowerCase() === 'heathrow') {
//     res.send(info[2].colleges);
//   } else {
//     res.send('city not found');
//   }
// });

// app.get('/hospitals/:city', function (req, res) {
//   const city = req.params.city;
//   if (city.toLowerCase() === 'stratford') {
//     res.send(info[0].hospitals);
//   } else if (city.toLowerCase() === 'harrow') {
//     res.send(info[1].hospitals);
//   } else if (city.toLowerCase() === 'heathrow') {
//     res.send(info[2].hospitals);
//   } else {
//     res.send('city not found');
//   }
// });

// app.get('/doctors/:city', function (req, res) {
//   const city = req.params.city;
//   if (city.toLowerCase() === 'stratford') {
//     res.send(info[0].doctors);
//   } else if (city.toLowerCase() === 'harrow') {
//     res.send(info[1].doctors);
//   } else if (city.toLowerCase() === 'heathrow') {
//     res.send(info[2].doctors);
//   } else {
//     res.send('city not found');
//   }
// });

app.get('/:cate/:city', function (req, res) {
  const city = req.params.city;
  const cate = req.params.cate.toLowerCase();
  if (city.toLowerCase() === 'stratford') {
    res.send(info[0][cate]);
  } else if (city.toLowerCase() === 'harrow') {
    res.send(info[1][cate]);
  } else if (city.toLowerCase() === 'heathrow') {
    res.send(info[2][cate]);
  } else {
    res.send('city not found');
  }
});

app.listen(process.env.PORT || 8081, () => {
  console.log('Server is working');
});
