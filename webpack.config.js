const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist'; // в продакшен режиме используем browserslist
  }

const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Данный html будет использован как шаблон
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', // Формат имени файла
      }), // Добавляем в список плагинов
  ]; // Создаем массив плагинов

module.exports = {
    mode,
    plugins,
    target,
    entry: './src/index.tsx',
    devtool: 'source-map', 
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    devServer: {
        port: 3001,
        hot: true, // Включает автоматическую перезагрузку страницы при изменениях
      },
    resolve:{
        extensions:['.js','.jsx','.tsx','.ts']
    },
    module: {
        rules: [
        { test: /\.(html)$/, use: ['html-loader'] }, // Добавляем загрузчик для html
        {
            test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          }, 
          {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            use: ['file-loader']
          },
          {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            use: ['file-loader']
          },
          {
            test: /\.js$/,
            exclude: /node_modules/, // не обрабатываем файлы из node_modules
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                cacheDirectory: true, // Использование кэша для избежания рекомпиляции
                // при каждом запуске
              },
            },
          },
          {
            test: /\.m?(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript'
                ],
              }
            }
        },
        {
            test: /\.m?jsx$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react'
                ],
              }
            }
        },
      ],
    }
  
}
