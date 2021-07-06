const path = require("path")

const resolve = dir => path.resolve(__dirname,dir)

module.exports = {
  webpack:{
    alias:{
      "@":resolve("src")
    },
    module:{
      rules:[{
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [{
         loader: 'url-loader',
         options: {
         limit: 40,
         esModule: false, // 此处添加配置
         name: 'img/[name].[hash:8].[ext]'
        }
        },]
        }
      ]
    }
  }
}