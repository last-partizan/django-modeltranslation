// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'modeltranslation/static/modeltranslation/es/tabs.js',
  output: {
    file: 'modeltranslation/static/modeltranslation/js/bundle.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};
