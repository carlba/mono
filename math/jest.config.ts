export default {
  displayName: 'math',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../coverage/math',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'], 
};
