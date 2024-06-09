const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true },
					},
				],
			},
			{
				test: /\.json$/,
				type: 'asset/resource', // Maneja archivos JSON como recursos
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body', // Inyectar los archivos generados al final del body
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [{ from: './src/data.json', to: '' }],
		}),
	],
	devtool: 'source-map',
	mode: 'development', // Cambiar a modo desarrollo
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
		open: true, // Abre automáticamente el navegador al iniciar el servidor
	},
};
