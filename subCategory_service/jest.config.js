module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['text', 'lcov'],
  clearMocks: true,
};
