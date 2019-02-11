'use strict';

var app = require('../app');
var request = require('supertest');

describe("test server endpoint", () => {
    test('should not have a post method', (done) => {
        return request(app).post('/primes/').expect(404, done);
    });

    test("get with no request should not be found", (done) => {
        return request(app).get('/primes/').expect(404, done);
    });

    test("a prime should return true", (done) => {
        request(app).get('/primes/7').expect(200).then((response) => {
            expect(response.body.result).toBe(true);
            done();
        })
    })

    test("a compound should return false", (done) => {
        request(app).get('/primes/6').expect(200).then((response) => {
            expect(response.body.result).toBe(false);
            done();
        })
    })

    test("a negative should return false", (done) => {
        request(app).get('/primes/-1').expect(200).then((response) => {
            expect(response.body.result).toBe(false);
            done();
        })
    })
})
