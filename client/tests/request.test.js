var axios = require('axios');
var request = require('../request');

jest.mock('axios');

describe('handle request responses', () => {
    test('mock request data', (done) => {
        axios.get.mockResolvedValueOnce({ data: 'foo' });
        request('9').then((response) => {
            expect(response).toBe('foo');
            expect(axios.get).toHaveBeenCalledTimes(1);
            done();
        });
    });

    test('mock network error', (done) => {
        axios.get.mockRejectedValue(new Error('Network Error'));
        request('9').catch((error) => {
            expect(error.message).toBe('Network Error');
            console.log(error);
            done();
        });
    });
});
