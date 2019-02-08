var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/', (req, res, next) => {
    console.log(JSON.stringify(req.body))
    res.json({result: false})
});

module.exports = app;
