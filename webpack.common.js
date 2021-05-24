const path = require("path");

module.exports = {
  entry: {
    app: "./index.tsx",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      Components: path.resolve("./src/components"),
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
