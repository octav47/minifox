import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/minifox.js',
    format: 'umd',
    name: 'minifox',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}
