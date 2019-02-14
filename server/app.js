var config = require('./config');
var busywait = require('./busywait');

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jsbn = require('jsbn');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/primes/:number', (req, res, next) => {

    var bi = new jsbn.BigInteger(req.params.number);

    if (config.get('JPRIMER_SLOWDOWN')) {
        busywait(
            Math.floor((Math.random()
            * (config.get('JPRIMER_SLOWDOWN_CEIL') - config.get('JPRIMER_SLOWDOWN_FLOOR')))
            + config.get('JPRIMER_SLOWDOWN_FLOOR'))
        );
    }

    res.json({ number: bi.toString(), result: bi.isProbablePrime() });
    
    next();
});

module.exports = app;
