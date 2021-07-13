export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/checkbox', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/checkbox', fragment: 'examples', children: [
    {
      name: 'Basic', routerUrl: '/documentation/checkbox', fragment: 'basic', children: []
    }, {
      name: 'Colors', routerUrl: '/documentation/checkbox', fragment: 'colors', children: []
    }, {
      name: 'Size', routerUrl: '/documentation/checkbox', fragment: 'size', children: []
    }, {
      name: 'Checked', routerUrl: '/documentation/checkbox', fragment: 'checked', children: []
    }, {
      name: 'Disabled', routerUrl: '/documentation/checkbox', fragment: 'disabled', children: []
    },
  ]
}];

export const DEMO_CODE = [{
  id: 0,
  name: 'Usage',
  type: 'usage',
  htmlCode: ``,
  componentCode: `
  <span class="import-initial">import </span><span class="import-braces">{</span><span> UIACheckboxModule </span><span class="import-braces">}</span><span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;

  <span class="import-initial">@NgModule({</span>
    <span>imports: </span><span class="import-package">[ UIACheckboxModule,... ]</span>
  <span class="import-initial">})</span>

`}];
