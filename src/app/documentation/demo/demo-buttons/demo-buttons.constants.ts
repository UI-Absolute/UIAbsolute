export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/buttons', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/buttons', fragment: 'examples', children:[
    {
      name: 'Basic', routerUrl: '/documentation/buttons', fragment: 'basic', children: []
    }, {
      name: 'Colors', routerUrl: '/documentation/buttons', fragment: 'colors', children: []
    }, {
      name: 'Outline Buttons', routerUrl: '/documentation/buttons', fragment: 'outlineButtons', children: []
    }, {
      name: 'Sizes', routerUrl: '/documentation/buttons', fragment: 'sizes', children: [
        {
          name: 'Small', routerUrl: '/documentation/buttons', fragment: 'small', children:[]
        },{
          name: 'Large', routerUrl: '/documentation/buttons', fragment: 'large', children:[]
        }]
    },{
      name: 'Toggle States', routerUrl: '/documentation/buttons', fragment: 'toggleStates', children: []
    },
  ]
}];

export const DEMO_CODE = [{
  id: 0,
  name: 'Usage',
  type: 'usage',
  htmlCode: ``,
  componentCode: `
  <span class="import-initial">import </span><span class="import-braces">{</span><span> UIAButtonsModule </span><span class="import-braces">}</span><span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;

  <span class="import-initial">@NgModule({</span>
    <span>imports: </span><span class="import-package">[ UIAButtonsModule,... ]</span>
  <span class="import-initial">})</span>

`},
{
  id: 1,
  name: 'Basic',
  type: 'code',
  htmlCode: `
  &lt;uia-button [value]="'Primary'"&gt;&lt;/uia-button&gt;`,
  componentCode: `
  this.settings = { };`
},
{
  id: 2,
  name: 'Colors',
  type: 'code',
  htmlCode: `
  &lt;uia-button [settings]="primarySettings" [value]="'Primary'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="secondarySettings" [value]="'Secondary'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="warningSettings" [value]="'Warning'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="successSettings" [value]="'Success'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="dangerSettings" [value]="'Danger'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="infoSettings" [value]="'Info'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="lightSettings" [value]="'Light'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="darkSettings" [value]="'Dark'"&gt;&lt;/uia-button&gt;`,
  componentCode: `
  this.primarySettings = {
    'bg_color': UIA_THEME.PRIMARY
  };
  this.secondarySettings = {
    'bg_color': UIA_THEME.SECONDARY
  };
  this.warningSettings = {
    'bg_color': UIA_THEME.WARNING
  };
  this.successSettings = {
    'bg_color': UIA_THEME.SUCCESS
  };
  this.dangerSettings = {
    'bg_color': UIA_THEME.DANGER
  };
  this.infoSettings = {
    'bg_color': UIA_THEME.INFO
  };
  this.lightSettings = {
    'bg_color': UIA_THEME.LIGHT
  };
  this.darkSettings = {
    'bg_color': UIA_THEME.DARK
  };`
},
{
  id: 3,
  name: 'Outline_Buttons',
  type: 'code',
  htmlCode: `
  &lt;uia-button [settings]="primaryOutlineSettings" [value]="'Primary'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="secondaryOutlineSettings" [value]="'Secondary'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="warningOutlineSettings" [value]="'Warning'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="successOutlineSettings" [value]="'Success'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="dangerOutlineSettings" [value]="'Danger'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="infoOutlineSettings" [value]="'Info'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="lightOutlineSettings" [value]="'Light'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="darkOutlineSettings" [value]="'Dark'"&gt;&lt;/uia-button&gt;`,
  componentCode: `
  this.primaryOutlineSettings = {
    bg_color: UIA_THEME.PRIMARY,
    isOutline: true
  };
  this.secondaryOutlineSettings = {
    bg_color: UIA_THEME.SECONDARY,
    isOutline: true
  };
  this.warningOutlineSettings = {
    bg_color: UIA_THEME.WARNING,
    isOutline: true
  };
  this.successOutlineSettings = {
    bg_color: UIA_THEME.SUCCESS,
    isOutline: true
  };
  this.dangerOutlineSettings = {
    bg_color: UIA_THEME.DANGER,
    isOutline: true
  };
  this.infoOutlineSettings = {
    bg_color: UIA_THEME.INFO,
    isOutline: true
  };
  this.lightOutlineSettings = {
    bg_color: UIA_THEME.LIGHT,
    isOutline: true
  };
  this.darkOutlineSettings = {
    bg_color: UIA_THEME.DARK,
    isOutline: true
  };`
},
{
  id: 4,
  name: 'Sizes',
  type: 'code',
  htmlCode: `
  &lt;uia-button [settings]="smallPrimarySettings" [value]="'Primary'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="smallPrimaryOutlineSettings" [value]="'Primary'"&gt;&lt;/uia-button&gt;`,
  componentCode: `
  this.smallPrimarySettings = {
    bg_color: UIA_THEME.PRIMARY,
    size: BUTTON_SIZE.SMALL
  };
  this.smallPrimaryOutlineSettings = {
    bg_color: UIA_THEME.PRIMARY,
    isOutline: true,
    size: BUTTON_SIZE.SMALL
  };`
},
{
  id: 5,
  name: 'Sizes',
  type: 'code',
  htmlCode: `
  &lt;uia-button [settings]="largePrimarySettings" [value]="'Primary'"&gt;&lt;/uia-button&gt;
  &lt;uia-button [settings]="largePrimaryOutlineSettings" [value]="'Primary'"&gt;&lt;/uia-button&gt;`,
  componentCode: `
  this.largePrimarySettings = {
    bg_color: UIA_THEME.PRIMARY,
    size: BUTTON_SIZE.LARGE
  };
  this.largePrimaryOutlineSettings = {
    bg_color: UIA_THEME.PRIMARY,
    isOutline: true,
    size: BUTTON_SIZE.LARGE
  };`
},
{
  id: 6,
  name: 'Toggle_States',
  type: 'code',
  htmlCode: `
  &lt;uia-button-toggle [settings]="settingsToggle" [value]="'Primary'" [checked]="true"&gt;&lt;/uia-button-toggle&gt;`,
  componentCode: `
  this.settingsToggle = {
    bg_color: UIA_THEME.PRIMARY
  };`
},
]
