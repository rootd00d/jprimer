const config = require('./config');
const request = require('./request');
const output = require('./output');
const jsbn = require('jsbn');
const cq = require('concurrent-queue');
 
module.exports = (start, count) => {

    var queue = cq().limit({ concurrency: config.get('CONCURRENT') }).process((number) => {
        return request(number);
    });

    var one = new jsbn.BigInteger('1');
    var i = new jsbn.BigInteger(start.toString());
    var end = i.add(new jsbn.BigInteger(count.toString()));
    for (; i.compareTo(end) < 0; i=i.add(one)) {
        queue(i.toString()).then(function (response) {
            output(response);
        });
    }

    return queue;
};
