const config = require('./config');
const search = require('./search');

console.log('Searching through ' + config.get('JPRIMER_COUNT') + ' numbers starting @ ' + config.get('JPRIMER_START'));
search(config.get('JPRIMER_START'), config.get('JPRIMER_COUNT'));
