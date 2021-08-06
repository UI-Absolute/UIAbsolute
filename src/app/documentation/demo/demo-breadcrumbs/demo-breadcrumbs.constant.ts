export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/breadcrumbs', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/breadcrumbs', fragment: 'examples', children: [
    {
      name: 'Basic', routerUrl: '/documentation/breadcrumbs', fragment: 'basic', children: []
    }, {
      name: 'Colors', routerUrl: '/documentation/breadcrumbs', fragment: 'colors', children: []
    }, {
      name: 'Seperator', routerUrl: '/documentation/breadcrumbs', fragment: 'seperator', children: []
    }, {
      name: 'Label with icon', routerUrl: '/documentation/breadcrumbs', fragment: 'labelIcon', children: []
    }
  ]
}];

export const DEMO_CODE = [{
  id: 0,
  name: 'Usage',
  type: 'usage',
  htmlCode: ``,
  componentCode: `
    <span class="import-initial">import </span><span class="import-braces">{</span><span> UIABreadcrumbsModule </span>`
    + `<span class="import-braces">}</span>`
    + `<span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;

    <span class="import-initial">@NgModule({</span>
      <span>imports: </span><span class="import-package">[ UIABreadcrumbsModule,... ]</span>
    <span class="import-initial">})</span>

  `},
{
  id: 1,
  name: 'Basic',
  type: 'code',
  htmlCode: `
    &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure"&gt;&lt;/uia-breadcrumbs&gt;`,
  componentCode: `
    this.linkStructure = [
        {
          id: 'home', // <= Id of the breadcrumb
          label: 'Home', // <= Label of the breadcrumb
          route: '/' // <= Route/Navigation url of the breadcrumb which will be used when user click on the breadcrumb
        },
        {
          id: 'list',
          label: 'List',
          route: '/list'
        },
        {
          id: 'details',
          label: 'Details',
          route: '/list/123'
        }
      ];`
},
{
  id: 2,
  name: 'Color',
  type: 'code',
  htmlCode: `
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure" [settings]="primarySettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure" [settings]="secondarySettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure" [settings]="warningSettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure" [settings]="successSettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure" [settings]="dangerSettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure" [settings]="infoSettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure" [settings]="lightSettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure" [settings]="darkSettings"&gt;&lt;/uia-breadcrumbs&gt;`,
  componentCode: `
  this.primarySettings = {
    color: UIA_THEME.PRIMARY
  }

  this.secondarySettings = {
    color: UIA_THEME.SECONDARY
  }

  this.successSettings = {
    color: UIA_THEME.SUCCESS
  }

  this.warningSettings = {
    color: UIA_THEME.WARNING
  }

  this.dangerSettings = {
    color: UIA_THEME.DANGER
  }

  this.darkSettings = {
    color: UIA_THEME.DARK
  }

  this.infoSettings = {
    color: UIA_THEME.INFO
  }

  this.lightSettings = {
    color: UIA_THEME.LIGHT
  }
`
},
{
  id: 3,
  name: 'Seperator',
  type: 'code',
  htmlCode: `
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructure" [settings]="defaultSettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="'-'" [links]="linkStructure" [settings]="defaultSettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="'>'" [links]="linkStructure" [settings]="defaultSettings"&gt;&lt;/uia-breadcrumbs&gt;
  &lt;uia-breadcrumbs [seperator]="seperatorIcon" [links]="linkStructure" [settings]="defaultSettings"&gt;&lt;/uia-breadcrumbs&gt;
`,
  componentCode: `
  this.seperatorIcon = "&lt;i class='fas fa-caret-right'&gt;&lt;/i&gt;"
`},
{
  id: 4,
  name: 'LabelIcon',
  type: 'code',
  htmlCode: `
  &lt;uia-breadcrumbs [seperator]="'/'" [links]="linkStructureWithIcon" [settings]="defaultSettings"&gt;&lt;/uia-breadcrumbs&gt;
`,
  componentCode: `
  this.linkStructureWithIcon = [
    {
      id: 'home', // <= Id of the breadcrumb
      label: '&lt;i class='fas fa-home'&gt;&lt;/i&gt; Home', // <= Label of the breadcrumb
      route: '/' // <= Route/Navigation url of the breadcrumb which will be used when user click on the breadcrumb
    },
    {
      id: 'list',
      label: 'List',
      route: '/list'
    },
    {
      id: 'details',
      label: 'Details',
      route: '/list/123'
    }
  ];
`}];
