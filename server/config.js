var os = require('os');
var nconf = require('nconf');

function Config() {
    nconf.argv().env();
    nconf.defaults({
        'JPRIMER_SLOWDOWN': false,
        'JPRIMER_CPUS': os.cpus().length
    });
}

Config.prototype.get = function(key) {
    return nconf.get(key);
};

module.exports = new Config();
