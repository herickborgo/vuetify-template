module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^@test/(.*)': '<rootDir>/tests/unit/$1',
  },
  transform: {
    './tests/unit/$': 'babel-jest',
  },
};
