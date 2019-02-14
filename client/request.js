const config = require('./config');
const axios = require('axios');

module.exports = (number) => {
    return new Promise((resolve, reject) => {
        axios.get(config.get('JPRIMER_SERVER') + `${number}`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
