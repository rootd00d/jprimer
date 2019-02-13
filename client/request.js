const config = require('./config');
const output = require('./output');
const axios = require('axios');

const instance = axios.create({
    baseURL: process.env.SERVER_URL || config.serverURL
});

module.exports = (number) => {
    instance.get(`${number}`)
        .then((response) => {
            output(response.request.path.split('/').pop(), response.data.result);
        })
        .catch((error) => {
            console.error(error);
        });
};
