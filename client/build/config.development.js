import webpackTask from './config.base';

export default [
  // webpackTask({
  //   appName: 'admin',
  //   extract: false,
  //   minimize: false,
  //   sourceMap: true,
  //   isHotReplace: true,
  //   // Dynamic import modules should be declared.
  //   // Link: https://github.com/webpack/webpack/issues/4360
  //   vendor: [
  //     'vue-property-decorator'
  //   ]
  // }),
  // I hate dynamic import...
  webpackTask({
    appName: 'mobile',
    extract: false,
    minimize: false,
    sourceMap: true,
    isHotReplace: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  // Because dynamic import is stupid... I have to write double app
  // Link: https://github.com/webpack/webpack/issues/6359
  webpackTask({
    appName: 'mobile-game',
    extract: false,
    minimize: false,
    sourceMap: true,
    isHotReplace: true,
    disableInject: true,
    copyFiles: [
      {
        from: './client/src/mobile-game/assets/lib/babylon.inspector.bundle.js',
        to: `javascripts/babylon.inspector.bundle.js`
      }
    ],
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator',
      'babylonjs',
      'babylonjs-gui',
      // for mobile touch library
      'handjs',
      // for support loading glTF, OBJ, STL files
      'babylonjs-loaders'
    ]
  }),
  // webpackTask({
  //   appName: 'pc',
  //   extract: false,
  //   minimize: false,
  //   sourceMap: true,
  //   isHotReplace: true,
  //   useServiceWorker: false,
  //   // Dynamic import modules should be declared.
  //   // Link: https://github.com/webpack/webpack/issues/4360
  //   vendor: [
  //     'vue-property-decorator'
  //   ]
  // })
];