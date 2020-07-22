const config = require('./config');

const environment = process.env.NODE_ENV || config.defaultEnv;

module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  },
  env: {
    ...config.environments[environment]
  }
};