const request = require('./request');
const output = require('./output');
const jsbn = require('jsbn');

module.exports = (start, count) => {
    var i = new jsbn.BigInteger(start.toString());
    var end = i.add(new jsbn.BigInteger(count.toString()));
    for (; i < end; i++) {
        request(i.toString()).then((response) => {
            output(response);
        }).catch((error) => {
            console.error(error);
        });
    }
};
