const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/index.js",
    signup: "./src/signup.js",
    login: "./src/login.js",
    options: "./src/options.js",
    adminDash: "./src/adminDash.js",
    newMeal: "./src/newMeal.js",
    // getMeal:"./src/getMeal.js",
    editMeal:"./src/editMeal.js",
    // delMeal: "./src/delMeal.js",
    placeOrder: "./src/placeOrder.js",
    orders: "./src/orders.js"
    // editOrder:"./src/editOrder.js",
    // completeOrder: ".src/completeOrder.js",
    // acceptOrder: ".src/acceptOrder.js"
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
