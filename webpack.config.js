const path = require("path");
const webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: [
        "react-hot-loader/patch",
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./src/index.jsx"
    ],
    devtool: "cheap-eval-source-map",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/public/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        publicPath: "/public",
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    stats: {
        colors: true,
        chunks: true,
        reasons: true
    },
    module: {
        rules: [{
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader"
            }
        ]
    }
};