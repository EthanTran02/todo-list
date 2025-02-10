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
    static: {
      directory: path.join(__dirname, 'src'), // Adjust this to your HTML file's directory
      watch: true,
    },
    hot: true,
    liveReload: true,
  },
};
