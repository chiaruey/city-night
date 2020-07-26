const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: 'tsconfig.storybook.json',
          babelCore: '@babel/core',
          useBabel: true,
          useCache: true,
          useTranspileModule: true
        }
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.plugins.push(new HardSourceWebpackPlugin());

  return config;
};
