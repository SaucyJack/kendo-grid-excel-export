# Setting up an Aurelia project with KendoUI and Bootstrap 4, bundled with Webpack.

## Running this project

1. Install dependencies: `npm install`
2. Run via the CLI (you MUST specify the --watch argument due to a Webpack bug, see below): `au run --watch`

## How I set this project up

1. Provision the project with the Aurelia CLI: 
```bash
au new <project name>
```
  * Using the CLI's default template for TS and Webpack is probably fine
2. Install Bootstrap and Jquery: 
```bash
npm install --save jquery bootstrap@4.1.1`
```
3. Install Kendo-UI:
```bash
npm install --save @progress/kendo-ui
```
4. Install the Aurelia-Kendoui-Bridge:
```bash
npm install --save aurelia-kendoui-bridge
```
5. Install JSZip, Kendo-UI dependency for exporting from grid:
```bash
npm install --save jszip
```
6. Bootstrap the aurelia-kendoui-bridge plugin. Open main.ts and add this line:
```typescript
aurelia.use.plugin(PLATFORM.moduleName('aurelia-kendoui-bridge'));
```
7. According to the Bart van Uden walkthrough below, we need to import the Kendo-UI JS and CSS files in main.ts like so:
```typescript
import '@progress/kendo-ui/js/kendo.all';
import '@progress/kendo-ui/css/web/kendo.common.min.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap-v4.css';
```
8. Add the TypeScript definitions to main.ts:
```typescript
/// <reference types="@progress/kendo-ui/index" />
```
9. Fix "$ is not defined" problem (this also from van Uden's blog):
```bash
npm install expose-loader --save-dev
```
Then, add this rule to the rules collection of webpack.config.js:
```javascript
{
  test: require.resolve('jquery'),
  use: [
    { loader: 'expose-loader', options: 'jQuery' },
    { loader: 'expose-loader', options: '$' }
  ]
}
```

## Other notes

* Currently there is a bug with Webpack using `au run`. Webpack appears to run fine and everything looks ok until you go to the site (default localhost:8080), at which time Webpack will emit an error about "You ran Webpack twice." There is an issue filed on Github for the Aurelia-CLI here: https://github.com/aurelia/cli/issues/852. You can get around this error running with the watch tag: `au run --watch`.

* Good walkthrough here: https://bartvanuden.azurewebsites.net/2017/09/23/aurelia-kendoui-bridge/


