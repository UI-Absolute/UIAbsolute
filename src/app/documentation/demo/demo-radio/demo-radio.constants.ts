export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/radio', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/radio', fragment: 'examples', children: [
    {
      name: 'Basic', routerUrl: '/documentation/radio', fragment: 'basic', children: []
    }, {
      name: 'Colors', routerUrl: '/documentation/radio', fragment: 'colors', children: []
    }, {
      name: 'Size', routerUrl: '/documentation/radio', fragment: 'size', children: []
    }, {
      name: 'Checked', routerUrl: '/documentation/radio', fragment: 'checked', children: []
    }, {
      name: 'Disabled', routerUrl: '/documentation/radio', fragment: 'disabled', children: []
    },
  ]
}];

export const DEMO_CODE = [{
  id: 0,
  name: 'Usage',
  type: 'usage',
  htmlCode: ``,
  componentCode: `
  <span class="import-initial">import </span><span class="import-braces">{</span><span> UIARadioModule </span>`
  + `<span class="import-braces">}</span><span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;

  <span class="import-initial">@NgModule({</span>
    <span>imports: </span><span class="import-package">[ UIARadioModule,... ]</span>
  <span class="import-initial">})</span>

`}];
