const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",

	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].bundle.js",
	},
	performance: {
		hints: false,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./Public/index.html",
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					chunks: "all",
				},
			},
		},
	},
	devServer: {
		port: 3000,
		host: "localhost",
		historyApiFallback: true,
		noInfo: false,
		stats: "minimal",
		contentBase: path.join(__dirname, "build"),
		hot: true,
	},
};
