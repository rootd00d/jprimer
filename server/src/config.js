var os = require('os');
var nconf = require('nconf');

function Config() {
    nconf.argv().env();
    nconf.defaults({
        'JPRIMER_SLOWDOWN': false,
        'JPRIMER_SLOWDOWN_FLOOR': 500,
        'JPRIMER_SLOWDOWN_CEIL': 1000,
        'JPRIMER_PORT': 3000,
        'JPRIMER_CPUS': os.cpus().length
    });
}

Config.prototype.get = function(key) {
    return nconf.get(key);
};

Config.prototype.set = function(key, value) {
    nconf.set(key, value);
};

module.exports = new Config();
