export default {
  displayName: 'leetcode',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/leetcode',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], 
};
