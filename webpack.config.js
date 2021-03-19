const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
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
};
