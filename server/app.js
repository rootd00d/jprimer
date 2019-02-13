var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jsbn = require('jsbn');
var busywait = require('./busywait');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/primes/:number', (req, res, next) => {
    var bi = new jsbn.BigInteger(req.params.number);
    if (process.env.SLOW_DOWN) {
        busywait(Math.floor((Math.random() * 1000) + 500));
    }
    res.json({ result: bi.isProbablePrime() });
    next();
});

module.exports = app;
