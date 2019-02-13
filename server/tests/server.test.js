var app = require('../app');
var request = require('supertest');

describe('test server endpoint', () => {
    test('should not have a post method', (done) => {
        return request(app).post('/primes/').expect(404, done);
    });

    test('get with no request should not be found', (done) => {
        return request(app).get('/primes/').expect(404, done);
    });

    test('a prime should return true', (done) => {
        request(app).get('/primes/7').expect(200).then((response) => {
            expect(response.body.result).toBe(true);
            done();
        });
    });

    test('a compound should return false', (done) => {
        request(app).get('/primes/6').expect(200).then((response) => {
            expect(response.body.result).toBe(false);
            done();
        });
    });

    test('a negative should return false', (done) => {
        request(app).get('/primes/-1').expect(200).then((response) => {
            expect(response.body.result).toBe(false);
            done();
        });
    });

    test('a 64-bit prime returns true', (done) => {
        request(app).get('/primes/902677838694299069').expect(200).then((response) => {
            expect(response.body.result).toBe(true);
            done();
        });
    });

    test('a 128-bit prime returns true', (done) => {
        request(app).get('/primes/311374719183590155288120852969307854859').expect(200).then((response) => {
            expect(response.body.result).toBe(true);
            done();
        });
    });

    test('a 256-bit prime returns true', (done) => {
        request(app).get('/primes/29745541885929814667398675890476856124058836135449355131710160267071282930881').expect(200).then((response) => {
            expect(response.body.result).toBe(true);
            done();
        });
    });

    test('non-numeric values return false', (done) => {
        request(app).get('/primes/foo').expect(200).then((response) => {
            expect(response.body.result).toBe(false);
            done();
        });
    });
});
