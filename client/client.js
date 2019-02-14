const config = require('./config');
const search = require('./search');

console.log('Searching through ' + config.get('COUNT') + ' numbers starting @ ' + config.get('START'));
search(config.get('START'), config.get('COUNT'));
