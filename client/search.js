const config = require('./config');
const request = require('./request');
const output = require('./output');
const jsbn = require('jsbn');
const cq = require('concurrent-queue');

module.exports = (start, count) => {
    var epoch = new Date();
    var queue = cq().limit({ concurrency: config.get('JPRIMER_CPUS') }).process((number) => {
        return request(number);
    });

    var numWorkers = 0;
    var one = new jsbn.BigInteger('1');
    var i = new jsbn.BigInteger(start.toString());
    var end = i.add(new jsbn.BigInteger(count.toString()));

    for (; i.compareTo(end) < 0; i=i.add(one)) {
        numWorkers++;
        
        console.debug('elapsed: ' + (new Date() - epoch).toString() + ` numWorkers: ${numWorkers}`);

        queue(i.toString()).then(function (response) {
            output(response);
        });
    }

    return queue;
};
