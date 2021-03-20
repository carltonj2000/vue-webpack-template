const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => ({
  output: {
    path: path.resolve(process.cwd(), "dist"),
  },
  entry: {
    main: "./src/main.ts",
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
      filename: `index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: [
      path.resolve(process.cwd(), "dist"),
      path.resolve(process.cwd(), "public"),
    ],
    port: 9000,
    stats: "minimal",
    liveReload: true,
  },
});
