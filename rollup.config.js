import uglify from 'rollup-plugin-uglify'
import commonjs from 'rollup-plugin-commonjs'
import packageInfo from './package.json'

export default {
  input: 'src/index.js',
  output: {
    file: `dist/${packageInfo.name}.min.js`,
    format: 'iife',
    name: 'Draw'
  },
  plugins: [
    commonjs(),
    uglify()
  ]
}
