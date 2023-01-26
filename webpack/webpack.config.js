// @ts-check
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/**
 * @type {import('webpack').Configuration}
 * */
const config = {
  mode: "development",
  entry: "./src/index.ts",
  devServer: {
    hot: true,
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
          },
        },
      },
    ],
  },
};

module.exports = config;
