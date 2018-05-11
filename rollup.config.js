import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/draw.min.js',
    format: 'iife',
    name: 'Draw'
  },
  plugins: [
    babel(),
    uglify()
  ]
}
