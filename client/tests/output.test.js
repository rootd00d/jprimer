var output = require('../output');

describe('test client output functionality', () => {
    test('rejects non-numeric values', (done) => {
        expect(output('asdf','foo')).toBe(false);
        done();
    });

    test('rejects non-boolean values', (done) => {
        expect(output('7','foo')).toBe(false);
        done();
    });

    test('accepts when numeric and boolean', (done) => {
        expect(output('7', true)).toBe(true);
    });

});
