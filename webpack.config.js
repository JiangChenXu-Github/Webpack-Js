// resolve用来拼接绝对路径
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    filename: 'build.js',
    // __dirname nodejs的变量, 代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  // loader的配置(下载->使用)
  module: {
    rules: [
      // 详细loader配置
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // 创建style标签, 将js中的样式资源插入, 添加到head标签中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中, 里面内容是样式字符串
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      }
    ]
  },
  // plugins的配置(下载->引用->使用)
  plugins: [
    new HtmlWebpackPlugin()
  ],
  // 模式
  mode: 'development',
  // mode: 'production,'
};