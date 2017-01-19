# Introduction

This is a sample repo to reproduce bsModal 'PositioningService is not a constructor' for [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) 1.1.25 and Angular 2.4.1

This build routine is based on [angular-seed](https://github.com/mgechev/angular-seed)

ng2-bootstrap Systemjs config: **tools/config/project.config.ts**
ng2-bootstrap in ngModule: **src/client/app/app.module.ts**
ng2-bootstrap Modals use: **src/client/app/app.component.html**

# Steps to reproduce the issue

```bash
# install node modules and runs seed preinstall routine
$ npm install

#optional - create dev build and verify modal works
$ npm run serve.dev

# create prod build with AoT compilation and systemjs bundling
$ npm run serve.prod.exp

```

Browser console will show error about PositioningService with the AOT build. Minification of compiled code is disabled in case that helps.
