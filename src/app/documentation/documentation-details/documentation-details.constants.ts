export const DEMO_CODE = [{
    id: 0,
    name: 'Usage',
    type: 'usage',
    htmlCode: ``,
    componentCode: `
    npm install ui-absolute --save
  `},
{
    id: 1,
    name: '',
    type: 'usage',
    htmlCode: ``,
    componentCode: `
    <span class="import-initial">import </span><span class="import-braces">{</span><span> UIABadgesModule </span>`
        + `<span class="import-braces">}</span>`
        + `<span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;
  
    <span class="import-initial">@NgModule({</span>
      <span>imports: </span><span class="import-package">[ UIABadgesModule,... ]</span>
    <span class="import-initial">})</span>
  `},
  {
    id: 2,
    name: '',
    type: 'usage',
    htmlCode: ``,
    componentCode: `
    &lt;uia-badge [value]="'Hello'"&gt;&lt;/uia-badge&gt;
  `},
  {
    id: 3,
    name: '',
    type: 'usage',
    htmlCode: ``,
    componentCode: `
    &lt;link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.X.X/css/bootstrap.min.css" rel="stylesheet"&gt;
  `},
  {
    id: 4,
    name: '',
    type: 'usage',
    htmlCode: ``,
    componentCode: `
    npm install bootstrap --save
  `},
  {
    id: 5,
    name: '',
    type: 'usage',
    htmlCode: ``,
    componentCode: `
    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.css",
        ...
    ],
    "scripts": [
        ...
        "./node_modules/bootstrap/dist/js/bootstrap.js"
    ]
  `}]