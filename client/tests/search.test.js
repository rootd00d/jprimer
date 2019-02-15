const axios = require('axios');
const search = require('../src/search');

jest.mock('axios');

describe('test search functionality', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('searches the right number of times', async (done) => {
        axios.get.mockResolvedValue({ data: { number: 7, result: false } });
        var queue = await search('1', '10');
        queue.drained(() => {
            expect(axios.get).toHaveBeenCalledTimes(10);
            done();
        });
    });

    test('test search triggers throttling', async (done) => {
        jest.setTimeout(60000);
        var consoleLog = console.log;
        var consoleDebug = console.debug;
        console.log = () => {};
        console.debug = () => {};
        axios.get.mockResolvedValue({ data: { number: 7, result: false } });
        var queue = await search('1', '20000');
        queue.drained(() => {
            console.log = consoleLog;
            console.debug = consoleDebug;
            expect(axios.get).toHaveBeenCalledTimes(20000);
            done();
        });
    });
});
