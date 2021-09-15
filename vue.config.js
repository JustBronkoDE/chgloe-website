module.exports = {
  /* Disable the preteching of chunks to decrease initial load size */
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },

  /* Define the public path of the app */
  publicPath: './',

  /**
   * Register scss variables and mixins globally
   * This avoids issues when using them inside components
   */
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/stylesheets/abstracts/variables.scss";
          @import "@/assets/stylesheets/abstracts/mixins.scss";
        `,
      },
    },
  },
  configureWebpack: {
    devtool: '',

    /**
     * Split larger chunks of npm packages into multiple smaller ones.
     * This avoids a big chunk-vendors.js file and increases performance with HTTP/2
     * https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
     * https://webpack.js.org/guides/caching/
     */
    optimization: {
      splitChunks: {
        /* This indicates which chunks will be selected for optimization. */
        chunks: 'all',
        /* Maximum number of parallel requests at an entry point. */
        maxInitialRequests: Infinity,
        /* Minimum size, in bytes, for a chunk to be generated. */
        minSize: 0,
        /* CacheGroups enable the seperation of specific third-party libraries. */
        cacheGroups: {
          vendor: {
            /* Controls which modules are selected by this cache group. */
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    },
  },
  devServer: {
    disableHostCheck: true
  }
}