const path = require("path"); // 导入 path
const webpack = require("webpack"); // 导入 webpack
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 导入 html 模板插件
const cleanWebpackPlugin = require("clean-webpack-plugin"); // 导入清空 dist 目录的插件
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin"); // 导入压缩 css 的插件
const miniCssExtractPlugin = require("mini-css-extract-plugin"); // 导入将 css 从 bundle.js 中分离的插件

// 创建一个分离 css 的实例
const styleCss = new miniCssExtractPlugin({filename: "css/[name].Style.css", chunkFilename: "css/[name].[hash:7].css"});
// styleCss 传导 plugins 中, miniCssExtrackPlugin 传递到 modules 中

// 创建一个压缩 css 的实例
const minCss = new optimizeCssAssetsWebpackPlugin();

// 创建一个情况文件的实例
const cleanDist = new cleanWebpackPlugin(["./dist"]); // 接收一个数组，里面的值表示要清空的文件夹


// 创建一个模板插件的实例
const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, "./app/index.html"), // 根据这个目录下的文件生成内存的模板。__dirname 表示当前文件 (webpack.config.js) 所处的目录
	filename: "index.html", // 生成的模板名称, 在这里设置成 index.html 就可以自动打开
	title: "博客", // 标题
	//favicon: "./app/images/favicon.ico",
	hash: true, // 清除缓存
	minify: {
		//collapseWhitespace: true // 压缩 html 直接的空白
	},
	// chunks: ["index"] // 生成 html 插入 js 的时候，按 chunks 顺序插入？
});


// module.exports 向外暴露一个打包的配置对象；因为 webpack 是基于 node 构建的; 所依 webpack 支持所有的 Node API 和 语法
// export default {} 和 export {} 是 ES6 的导出语法，不支持在 webpack.config.js 中使用. 与之对应的导入是 import * from "标识符";
module.exports = {
	// 1. webpack 的第一大属性 mode 模式
	mode: "production", // development 代表开发环境, production 是线上环境。根据参数开判断是否压缩 js 文件

	// 2. webpack 的第二大属性 entry 入口, 可以实现多入口
	// entry: {
	// 	index: "./app/index.js",
	// 	//index2: "./src/index2.js"
	// },
	entry: ['@babel/polyfill','./app/index.js'],

	// 3. webpack 的第三大属性 output 出口
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js"
	},

	// 4. webpack 的第四大属性 module 模块的配置规则
	// webpack 默认只能打包处理 .js 后缀 类型的文件；像 .png .vue 等，webpack 是无法主动处理的，所以要配置第三方的 loader
	module: {
		rules: [ // rules 规则，带 s 表示一个数组代表很多的意思
			{
				test: /\.(js|jsx)$/, // 以 .js 或者是 .jsx 后缀名结尾的文件
				use: ["babel-loader"], // 代表 loader ，如果只有一个写成字符串，如果有多个要写成数组,
				exclude: /node_modules/ // exclude 排除项，排除 node_modules 文件里面的 .js 或者 .jsx 后缀名结尾的文件。这个一定要加
			},
			{
				test: /\.css$/,
				//use: ["style-loader", "css-loader"],
				use: [
					{
						loader: miniCssExtractPlugin.loader,
						options: {publicPath: "./css"}
					},
					"css-loader"
				]
				// 打包处理 css 样式表的第三方 loader，加 loader 的顺序要对上,由后向前编译
			},
			{
				test: /\.less$/,
				use: [
					miniCssExtractPlugin.loader,
					"css-loader?modules&localIdentName=[path][name]-[local]-[hash:6]",
					"less-loader"
				]
				//use: ["style-loader", "css-loader?modules&localIdentName=[path][name]-[local]-[hash:6]", "less-loader"]
				// 在配置文件中如何加上参数？ => 在 css-loader 之后通过 "?" 追加参数。
				// 其中有一个固定的参数，叫做 modules ，表示为普通的 css 样式表，启用模块化
				// 但是生成的类名很有特色，如何自定义类名？ 使用 localIdentName
				// path 表示样式表相对于项目根目录，所在路径
				// name 表示样式表文件名称
				// local 表示样式的类名定义样式
				// [hash:length] 表示 32　位的 hase 值，可以防止类名的重复
			},
			{
				test: /\.(ttf|woff|woff2|eot|svg)$/i,
				//use: "url-loader"
				use: {
					loader: "url-loader",
					// options: {
					// 	limit: 10 * 1024,
					// 	outputPath: "./fonts"
					// }
				}
				// 打包处理，字体文件的
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10 * 1024,
							outputPath: "./images"
							// 超过 10 * 1024 的字节 就从 bundle.js 中分离到 images 这个文件夹中
						}
					},
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebug: true
						}
						// 分离出来后进行图片的压缩，需要用到 images-webpack-loader　这个 loader
					}
				]
			}
		]
	},

	// 5. webpack 的第5大属性 plugins 插件
	plugins: [
		htmlPlugin,
		cleanDist,
		styleCss,
		minCss
	],

	// 6. webpack 的第六大属性 webpack-dev-server
	devtool: "source-map",
	devServer: {
		contentBase: path.resolve(__dirname, ""),
		compress: true,
		host: '192.168.1.175',
		port: 8110,
		//open: true,
		disableHostCheck: true,
		proxy: [{
            context: ['/index', '/api'],
            target: 'http://localhost:8080',
        }]
	},

	// 7. webpack 的第七大属性 resolve
	resolve: {
		extensions: [".js", ".jsx", ".json"], // 表示，这个几个文件的后缀名，可以省略不写
		alias: {
			"@": path.join(__dirname, "./app") // 这样, @ 就表示 项目根目录中 src 的这一层路径。这是一个绝对路径
		}
	}
}