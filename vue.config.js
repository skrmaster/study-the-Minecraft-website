const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
	chainWebpack: config => {
	 config.module.rule('md')
	  .test(/\.md/)
	  .use('vue-loader')
	  .loader('vue-loader')
	  .end()
	  .use('vue-markdown-loader')
	  .loader('vue-markdown-loader/lib/markdown-compiler')
	  .options({
	   raw: true
	  })
	}
}
