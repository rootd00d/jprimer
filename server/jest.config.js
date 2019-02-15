module.exports = {
    testMatch: ['<rootDir>/**/*.test.js'],
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
        '**/*.js',
        '!**/node_modules/**',
        '!**/coverage/**',
        '!**/jest.config.js'
    ]
};
