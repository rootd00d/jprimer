const axios = require('axios');
const search = require('../src/search');

jest.mock('axios');

describe('test search functionality', () => {
    test('searches the right number of times', async (done) => {
        axios.get.mockResolvedValue({ data: { number: 7, result: false } });
        var queue = await search('1', '10');
        queue.drained(() => {
            expect(axios.get).toHaveBeenCalledTimes(10);
            done();
        });
    });
});
