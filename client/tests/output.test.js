var output = require('../src/output');

describe('test client output functionality', () => {
    test('rejects non-numeric values', (done) => {
        expect(output({ number: 'asdf', result: true })).toBe(false);
        done();
    });

    test('rejects non-boolean values', (done) => {
        expect(output({ number: '7', result: 'foo' })).toBe(false);
        done();
    });

    test('accepts when numeric and boolean', (done) => {
        expect(output({ number: '7', result: true })).toBe(true);
        done();
    });
});
