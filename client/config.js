const os = require('os');
const nconf = require('nconf');

function Config() {
    nconf.argv().env();
    nconf.defaults({
        'JPRIMER_SERVER': 'http://localhost:3000/primes/',
        'JPRIMER_START': '0',
        'JPRIMER_COUNT': '8',
        'JPRIMER_CPUS': os.cpus().length,
        'JPRIMER_MAXREQUESTS': 100
    });
}

Config.prototype.get = function(key) {
    return nconf.get(key);
};

module.exports = new Config();
