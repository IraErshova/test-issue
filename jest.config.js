
module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: {
        before: [
          'jest-preset-angular/build/InlineFilesTransformer',
          'jest-preset-angular/build/StripStylesTransformer',
        ],
      },
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [ '<rootDir>/src/setup-jest.ts' ],
  transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
  errorOnDeprecated: true,
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 96
    }
  },
  collectCoverageFrom: [
    'src/app/**/*.ts',
    '!src/app/**/(|*.module|*.constant|*.enum|*.interface|*.spec|*.mock|*.d).ts',
    '!coverage/*',
    '!e2e/*',
    '!nginx/*',
    '!node_modules/*',
    '!npm-packages-offline-cache/*'
  ]
};
