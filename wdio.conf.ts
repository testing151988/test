export const config = {
    runner: 'local',
    specs: [
      './test/**/*.ts', 
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [
      {
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
      },
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: [
      'spec',
      [
        'junit',
        {
          outputDir: './results', 
          outputFileFormat: function (options) {
            return `results-${options.cid}.xml`; 
          },
        },
      ],
      [
        'json',
        {
          outputDir: './results', 
        },
      ],
    ],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000,
    },
    beforeSession: function (_config, _capabilities) {
      require('ts-node').register({ files: true });
    },
  };
  