import { readdirSync } from 'fs'
import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const getChunks = URI =>
  readdirSync(path.resolve(URI))
    .filter(x => x.includes('.js'))
    .reduce((a, c) => ({ ...a, [c.replace('.js', '')]: `${URI}/${c}` }), {})

module.exports = [{
  input: 'src/index.js',
  output: [
    { file: 'dist/minifox.js', format: 'cjs', sourcemap: true },
    { file: 'dist/minifox.umd.js', format: 'umd', name: 'minifox', sourcemap: true }
    ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      include: /node_modules/,
    }),
    // localResolve(),
    resolve({
      // dedupe: [ 'react', 'react-dom' ]
    }),
  ],
  // external: ['react', 'react-dom'],
}]
