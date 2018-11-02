declare const require: any;
const pkg = require('../../projects/ng-lightning/package.json');

export const environment = {
  production: true,
  version: pkg.version,
  now: new Date(),
};
