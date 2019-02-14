var axios = require('axios');
var search = require('../search');

jest.mock('axios');

describe('test search functionality', () => {
    test('searches the right number of times', (done) => {
        axios.get.mockResolvedValue({ data: { number: 7, result: false } });
        search('1', '10').drained(() => {
            expect(axios.get).toHaveBeenCalledTimes(10);
            done();
        });
    });
});
