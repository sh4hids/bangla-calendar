import { terser } from 'rollup-plugin-terser';
const pkgName = 'bn-number-utils';

export default [
  {
    input: 'src/main.js',
    plugins: [terser()],
    output: {
      file: `umd/${pkgName}.js`,
      format: 'umd',
      name: 'bnNumberUtils',
      esModule: false,
    },
  },
  {
    input: {
      index: 'src/main.js',
      convertNumbers: 'src/convert-numbers.js',
      convertToTaka: 'src/convert-to-taka.js',
    },
    output: [
      {
        dir: 'esm',
        format: 'esm',
      },
      {
        dir: 'cjs',
        format: 'cjs',
      },
    ],
  },
];
