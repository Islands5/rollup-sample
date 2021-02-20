import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'; // requreでのモジュール呼び出しとかに対応する
import { nodeResolve } from '@rollup/plugin-node-resolve'; // node_modulesからライブラリをimportするために対応

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve({ browser: true }), // commonjs()の前に
    commonjs(), // こっちをbabel()の前に
    babel({ babelHelpers: 'bundled' })
  ]
};
