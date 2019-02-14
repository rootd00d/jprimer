var nconf = require('nconf');

function Config() {
    nconf.argv().env();
    nconf.defaults({
        'SERVER': 'http://localhost:3000/primes/',
        'START': '0',
        'COUNT': '5',
        'CONCURRENT': 10
    });
}

Config.prototype.get = function(key) {
    return nconf.get(key);
};

module.exports = new Config();
