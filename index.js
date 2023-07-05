var express = require('express')
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
app.use(bodyParser.json()); 
const populationrouter = require('./app/routes/population')
const internetrouter = require('./app/routes/internet')
app.use("/api/v1/population",populationrouter)
app.use("/api/v1/internet",internetrouter)
app.listen(5000, () => {
    console.log('Server đang chay tren cong 5000');
});
