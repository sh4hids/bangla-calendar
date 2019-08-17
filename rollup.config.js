import { terser } from 'rollup-plugin-terser';
const pkgName = 'bangla-calendar';

export default [
  {
    input: 'src/main.js',
    plugins: [terser()],
    output: {
      file: `umd/${pkgName}.js`,
      format: 'umd',
      name: 'banglaCalendar',
      esModule: false,
    },
  },
  {
    input: {
      index: 'src/main.js',
      getDay: 'src/getDay.js',
      getMonth: 'src/getMonth.js',
      getYear: 'src/getYear.js',
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
