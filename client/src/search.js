const config = require('./config');
const request = require('./request');
const output = require('./output');
const jsbn = require('jsbn');
const cq = require('concurrent-queue');
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

module.exports = async (start, count) => {
    var epoch = new Date();
    var queue = cq().limit({ concurrency: config.get('JPRIMER_CPUS') }).process((number) => {
        return request(number);
    });

    var one = new jsbn.BigInteger('1');
    var i = new jsbn.BigInteger(start.toString());
    var end = i.add(new jsbn.BigInteger(count.toString()));
    var totalScheduled = new jsbn.BigInteger('0');

    for (; i.compareTo(end) < 0; i=i.add(one)) {
        if (queue.size > config.get('JPRIMER_QUEUE_MAX_DEPTH')) {
            await setTimeoutPromise(config.get('JPRIMER_QUEUE_TIMEOUT'), queue.size).then((value) => {
                console.debug(`Queue shrank: ${value} -> ${queue.size}`);
            });
        }

        queue(i.toString()).then(function (response) {
            output(response);
            console.log(`queueSize: ${queue.size}`);
        }).catch((error) => {
            console.log(error);
        });

        totalScheduled = totalScheduled.add(one);
        console.debug(`elapsed: ${(new Date() - epoch).toString()} queueSize ${queue.size} totalScheduled: ${totalScheduled.toString()}`);
    }

    return queue;
};
