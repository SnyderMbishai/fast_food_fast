const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/index.js",
    signup: ".src/signup.js",
    login: "./src/login.js",
    options: "./src/options.js",
    adminDash: "./src/adminDash.js",
    newMeal: "./src/newMeal.js",
    editMeal: "./src/editMeal.js"
  },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env", "stage-2"]
          }
        }
      }
    ]
  },
  devtool: "inline-source-map"
};
