var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var BigInteger = require('jsbn').BigInteger;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/primes/:number', (req, res, next) => {
    var bi = new BigInteger(req.params.number)
    res.json({ result: bi.isProbablePrime() })
});

module.exports = app;
