const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

const styleLoader = {
  test: /\.s?css$/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
};

module.exports = merge.smart(
  {
    mode: "production",
    module: {
      rules: [styleLoader],
    },
  },
  common
);
