


// module.exports = { chainWebpack: (config) => { config.resolve.alias.set('@', resolve('src')).set('assets', resolve('src/assets')).set('components', resolve('src/components')).set('layout', resolve('src/layout')).set('base', resolve('src/base')).set('static', resolve('src/static')) } }
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('store', resolve('src/store'))
      .set('view', resolve('src/view'))

    // config.plugin("html").tap(args => {
    //   args[0].minify = false;
    //   return args;
    // });
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-EarthQuake-App/'
    : '/'
  // css: {
  //   modules: true
  // },
  // // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/production-sub-path/',
  // productionSourceMap: false,
}


// module.export = {
// configureWebpack: {
//     resolve: '',
//     alias: {
//       assets: "@/assets",
//       common: "@/common",
//       components: "@/components",
//       network: "@/network",
//       store: "@/store",
//       view: "@/view",
//     }
//   }
// }

