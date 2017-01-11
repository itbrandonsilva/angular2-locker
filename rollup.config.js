export default {
  entry: 'dist/src/index.js',
  dest: 'dist/bundles/angular2-locker.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'angular2.locker',
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }
}
