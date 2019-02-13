const request = require('./request');

for (var i = 0; i < 1000; i++) {
    request(i);
}
