module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['build'],
  // modulePathIgnorePatterns: ['<rootDir>/src/tests/integration', '<rootDir>/dist'],
  testEnvironmentOptions: {
    NODE_ENV: 'test',
    APP_ENV: 'test',
  },
  restoreMocks: true,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
}
