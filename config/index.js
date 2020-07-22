const defaultEnv = 'development';

//     movieServiceUrl: 'https://movie-service-0704.azurewebsites.net'
const environments = {
  development: {
    movieServiceUrl: 'https://the-movie-service.herokuapp.com'
  },
  production: {
    movieServiceUrl: 'https://the-movie-service.herokuapp.com'
  }
};

module.exports = {
  port: 3000,
  environments,
  defaultEnv
};
