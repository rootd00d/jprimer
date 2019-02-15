const os = require('os');
const nconf = require('nconf');

function Config() {
    nconf.argv().env();
    nconf.defaults({
        'JPRIMER_SERVER': 'http://localhost:3000/primes/',
        'JPRIMER_START': '0',
        'JPRIMER_COUNT': '8',
        'JPRIMER_CPUS': os.cpus().length,
        'JPRIMER_QUEUE_MAX_DEPTH': 10000,
        'JPRIMER_QUEUE_TIMEOUT': 5000
    });
}

Config.prototype.get = function(key) {
    return nconf.get(key);
};

module.exports = new Config();
