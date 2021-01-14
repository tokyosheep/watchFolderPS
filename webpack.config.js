"use strict";
const mode = "production";
const TerserPlugin = require("terser-webpack-plugin");
const enabledSourceMap = mode === "production";
const path = require("path");

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: mode,
    devtool:"source-map",
    externals: {
      fsevents:"require('fsevents')"
    },
    optimization:{
      minimize: !enabledSourceMap,
      minimizer:[
          new TerserPlugin({
              extractComments: "all",
              terserOptions:{
                  compress:{
                      drop_console:true,//production modeでconsole.log消えます
                  }
              }
          }),
      ],
    },
    target:"nwjs",
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/main.jsx",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: "main.min.js"
    },
    context:path.join(__dirname,"src"),
    entry:{main:"./main"},
    module: {
      rules:[
        {
          test:/\.tsx?$/,
          use:"babel-loader",
          exclude:/node_modules/
        }
      ],
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx",".json"],
    }
  }