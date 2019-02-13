const request = require('./request');
const output = require('./output');

for (var i = 10000000000000; i < 10000000001000; i++) {
    request(i).then((response) => {
        output(response);
    }).catch((error) => {
        console.error(error);
    });
}
