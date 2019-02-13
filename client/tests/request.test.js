var axios = require('axios');
var adapter = require('axios-mock-adapter');
var config = require('../config');
var request = require('../request');
var mock = new adapter(axios);

describe('handle request responses', () => {
    test('handle mock data', (done) => {

        mock.onGet(config.serverURL + '7').reply(200, { number: 7, result: true });

        request(7).then((response) => {
            expect(response.number).toBe(7);
            expect(response.result).toBe(true);
            mock.restore();
            done();
        });
    });

    test('handle network error', (done) => {

        mock.onGet(config.serverURL + '7').networkError();

        return request(7).then(() => {}, error => {
            expect(error.code).toBe('ECONNREFUSED');
            mock.restore();
            done();
        });   
    });

    test('handle network timeout', (done) => {
        
        mock.onGet(config.serverURL + '7').timeout();

        return request(7).then(() => {}, error => {
            expect(error.code).toBe('ECONNREFUSED');
            mock.restore();
            done();
        });   
    });
});
