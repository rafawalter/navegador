exports.config = {
  baseUrl: './client/',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: ['../features/**/*.feature'],

  cucumberOpts: {
    format: 'pretty',
    require: '../features/steps/*_steps.js',
    tags: '@watch'
  },
}
