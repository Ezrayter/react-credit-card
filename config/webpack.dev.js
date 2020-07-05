const merge = require("webpack-merge");

const common = require("./webpack.common.js");

const styleLoader = {
  test: /\.s?css$/,
  use: ["style-loader", "css-loader", "postcss-loader"],
};

module.exports = merge.smart(
  {
    mode: "development",
    devtool: "inline-source-map",
    module: {
      rules: [styleLoader],
    },
    devServer: {
      compress: true,
      port: 3001,
      historyApiFallback: true,
      host: "0.0.0.0",
      hot: true,
    },
  },
  common
);
