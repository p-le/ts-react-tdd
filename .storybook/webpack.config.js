const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.module.rules.push({
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: 'awesome-typescript-loader'
  });
  
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
