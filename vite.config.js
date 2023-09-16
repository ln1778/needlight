
const { defineConfig } = require('vite');
const path = require('path')


module.exports = defineConfig({

  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
});