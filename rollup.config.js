import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'; // requreでのモジュール呼び出しとかに対応する
import { nodeResolve } from '@rollup/plugin-node-resolve'; // node_modulesからライブラリをimportするために対応
import stimulusPlugin from 'rollup-plugin-stimulus';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    sourcemap: false
  },
  plugins: [
    stimulusPlugin({
      basePath: './src/controllers',
      importName: 'stimulus-controllers',
      showWarnings: false,
    }),
    nodeResolve({ browser: true }), // commonjs()の前に
    commonjs(), // こっちをbabel()の前に
    babel({ babelHelpers: 'bundled' })
  ]
};
