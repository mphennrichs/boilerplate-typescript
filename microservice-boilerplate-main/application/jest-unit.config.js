const jestConfig = require('./jest.config');
jestConfig.testMatch = ['<rootDir>/test/**/*.spec.ts'];
module.exports = jestConfig;
