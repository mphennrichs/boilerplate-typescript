const jestConfig = require('./jest.config');
jestConfig.testMatch = ['<rootDir>/test/**/*.e2e-spec.ts'];
module.exports = jestConfig;
