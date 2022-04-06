/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(_dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.jsx|.tsx|.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                text: /\.html$/,
                use: {
                    loader: "html.loader"
                }
            }
        ]
    },
    plugin: [
        new HtmlWebPackPlugin({
            title: "react app",
            filename: "index.html",
            template: "./src/index.html"
        })
    ]
}