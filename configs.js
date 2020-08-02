const path = require('path')
const buble = require('@rollup/plugin-buble')
const { uglify } = require('rollup-plugin-uglify')

const resolve = _path => path.resolve(__dirname, _path)

const JSOptions = {
  umdDev: {
    input: resolve('src/main.js'),
    file: resolve('dist/likebubble.js'),
    format: 'umd'
  },
  umdPord: {
    input: resolve('src/main.js'),
    file: resolve('dist/likebubble.min.js'),
    format: 'umd',
    plugins: [uglify()]
  },
  esm: {
    input: resolve('src/main.js'),
    file: resolve('dist/likebubble.esm.js'),
    format: 'es'
  }
}

function genConfig (opt) {
  return {
    input: {
      input: opt.input,
      plugins: [ buble(), ...(opt.plugins || []) ]
    },
    output: {
      file: opt.file,
      format: opt.format,
      name: 'likebubble'
    }
  }
}

function mapOpts (opts, fn) {
  return Object.keys(opts).map(key => {
    return fn(opts[key])
  })
}

module.exports = {
  js: mapOpts(JSOptions, genConfig)
}
