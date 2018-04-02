import webpackTask from './config.base'

export default [
  webpackTask({
    appName: 'admin',
    extract: true,
    minimize: true,
    sourceMap: false,
    useServiceWorker: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'mobile',
    extract: true,
    minimize: true,
    sourceMap: false,
    useServiceWorker: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  }),
  webpackTask({
    appName: 'mobile-game',
    extract: true,
    minimize: true,
    sourceMap: false,
    useServiceWorker: true,
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
  webpackTask({
    appName: 'pc',
    extract: true,
    minimize: true,
    sourceMap: false,
    useServiceWorker: true,
    // Dynamic import modules should be declared.
    // Link: https://github.com/webpack/webpack/issues/4360
    vendor: [
      'vue-property-decorator'
    ]
  })
]
