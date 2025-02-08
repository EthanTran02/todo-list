const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Change to 'production' for production builds
  entry: "./src/index.js", // Entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleans old files in 'dist' before building
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // Loads CSS into JS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Template for HTML
    }),
  ],
  devServer: {
    static: "./dist", // Serve files from 'dist'
    port: 9000, // Local dev server port
    open: true, // Opens browser automatically
    hot: true, // Enables Hot Module Replacement (HMR)
    liveReload: true, // Enable live reloading
  },
};
