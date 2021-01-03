module.exports = {
  name: 'node-products-api',
  verbose: true,
  testMatch: ['**/*.test.js', 'src/**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
    '!**/src/app.js',
    '!**/src/router.js',
    '!**/src/server.js',
    '!**/src/db/dbConnection.js'
  ],
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      lines: 70,
      functions: 70
    }
  },
  testTimeout: 10000
}
