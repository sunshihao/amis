// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';

// import license from 'rollup-plugin-license';
import autoExternal from 'rollup-plugin-auto-external';
import {
  // name,
  // version,
  // author,
  // main,
  module,
  dependencies
} from './package.json';
import path from 'path';
import svgr from '@svgr/rollup';
import fs from 'fs';
// import i18nPlugin from 'plugin-react-i18n';
// import moment from 'moment';

// const i18nConfig = require('./i18nConfig');

const settings = {
  globals: {}
  // commonConfig: {
  //   footer: `window.amisEditorVersionInfo={version:'${version}',buildTime:'${moment().format(
  //     'YYYY-MM-DD'
  //   )}'};`
  // }
};

const external = id =>
  new RegExp(
    `^(?:${Object.keys(dependencies)
      .concat(fs.readdirSync(path.join(__dirname, '../../node_modules')))
      .map(value =>
        value.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
      )
      .join('|')})`
  ).test(id);
const input = './src/index.tsx';

export default [
  // {
  //   input,

  //   output: [
  //     {
  //       ...settings,
  //       // ...settings.commonConfig,
  //       dir: path.dirname(main),
  //       format: 'cjs',
  //       exports: 'named',
  //       preserveModulesRoot: './src',
  //       preserveModules: true // Keep directory structure and files
  //     }
  //   ],
  //   external,
  //   plugins: getPlugins('cjs')
  // },
  {
    input,

    output: [
      {
        ...settings,
        // strict: false,
        // skipLibCheck: true, // 跳过ts检查
        // ...settings.commonConfig,
        dir: path.dirname(module),
        format: 'esm',
        exports: 'named',
        preserveModulesRoot: './src',
        preserveModules: false // Keep directory structure and files
      }
    ],
    external,
    plugins: getPlugins('esm')
  }
];

function transpileDynamicImportForCJS(options) {
  return {
    name: 'transpile-dynamic-import-for-cjs',
    renderDynamicImport({format, targetModuleId}) {
      if (format !== 'cjs') {
        return null;
      }

      return {
        left: 'Promise.resolve().then(function() {return new Promise(function(fullfill) {require([',
        right:
          '], function(mod) {fullfill(require("tslib").__importStar(mod))})})})'
      };

      // return {
      //   left: 'Promise.resolve().then(function() {return new Promise(function(fullfill) {require.ensure([',
      //   right:
      //     '], function(r) {fullfill(_interopDefaultLegacy(r("' +
      //     targetModuleId +
      //     '")))})})})'
      // };
    }
  };
}

function getPlugins(format = 'esm') {
  const typeScriptOptions = {
    typescript: require('typescript'),
    // typescript: typescript(),
    // typescript: typescript({
    //   // tsconfig: false, // 指定 TypeScript 配置文件
    //   // include: ['src/**/*.ts'], // 指定要编译的 TypeScript 文件路径
    //   exclude: ['node_modules/**'], // 排除不需要编译的文件夹路径
    //   check: false // 启用类型检查
    // }),
    sourceMap: false,
    // outputToFilesystem: true,
    compilerOptions: {
      rootDir: './src',
      checkJs: false,
      // skipLibCheck: true, // 跳过ts检查
      // strict: false,
      outDir: path.dirname(module)
    }
  };

  return [
    // i18nPlugin(i18nConfig),
    typescript(typeScriptOptions),
    svgr({
      svgProps: {
        className: 'icon'
      },
      prettier: false,
      dimensions: false
    }),
    transpileDynamicImportForCJS(),
    autoExternal(),
    json(),
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      sourceMap: false
    }),
    // license({
    //   banner: `
    //     ${name} v${version}
    //     build time: <%=moment().format('YYYY-MM-DD')%>
    //     Copyright 2018<%= moment().format('YYYY') > 2018 ? '-' + moment().format('YYYY') : null %> ${author}
    //   `
    // }),
    onRollupError(error => {
      console.warn(`[构建异常]${error}`);
      // 构建异常时，删除 tsconfig.tsbuildinfo
      fs.unlink(path.resolve(__dirname, 'tsconfig.tsbuildinfo'), () => {
        console.info(
          '[构建异常]已自动删除tsconfig.tsbuildinfo，请重试构建命令。'
        );
      });
    })
  ];
}

function onRollupError(callback = () => {}) {
  return {
    name: 'onerror',
    buildEnd(err) {
      if (err) {
        callback(err);
      }
    }
  };
}
