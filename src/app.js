const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const rutas = require('./routes/rutas');
const multer = require('multer');
const upload = multer({ dest: './uploads' });

const app = express();
//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));



app.use(rutas);

app.listen(3002, () =>
    console.log('server on port 3002')

);
module.exports = app;