module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  "framework": "@storybook/react",
  babel: (config) => {
    config.presets.push(require.resolve("@emotion/babel-preset-css-prop"));
    return config;
  },
}