const express = require('express');
//const cors = require('cors');
const app = express();
const port = 3001;
const carsRoute = require('./routes/cars');

app.get('/', (req, res) => {
  res.send('Welcome to the Cars API!');
});

// var corsOptions = {
//     origin: 'http://localhost:5000',
//     optionsSuccessStatus: 200, // For legacy browser support
//     methods: "GET, PUT"
// }

//app.use(cors(corsOptions));

app.use('/api/cars', carsRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});