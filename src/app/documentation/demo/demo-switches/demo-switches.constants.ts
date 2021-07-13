export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/switches', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/switches', fragment: 'examples', children: [
    {
      name: 'Basic', routerUrl: '/documentation/switches', fragment: 'basic', children: []
    }, {
      name: 'Colors', routerUrl: '/documentation/switches', fragment: 'colors', children: []
    }, {
      name: 'Size', routerUrl: '/documentation/switches', fragment: 'size', children: []
    }, {
      name: 'Checked', routerUrl: '/documentation/switches', fragment: 'checked', children: []
    }, {
      name: 'Disabled', routerUrl: '/documentation/switches', fragment: 'disabled', children: []
    },
  ]
}];

export const DEMO_CODE = [{
  id: 0,
  name: 'Usage',
  type: 'usage',
  htmlCode: ``,
  componentCode: `
  <span class="import-initial">import </span><span class="import-braces">{</span><span> UIASwitchesModule </span><span class="import-braces">}</span><span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;

  <span class="import-initial">@NgModule({</span>
    <span>imports: </span><span class="import-package">[ UIASwitchesModule,... ]</span>
  <span class="import-initial">})</span>

`},
{
  id: 1,
  name: 'Basic',
  type: 'code',
  htmlCode: `
  &lt;uia-switch [settings]="settings"&gt;&lt;/uia-switch&gt;`,
  componentCode: `
  this.settings = {
    color: UIA_THEME.PRIMARY,
    size: SWITCHES_SIZE.DEFAULT
  };`
},
{
  id: 2,
  name: 'Colors',
  type: 'code',
  htmlCode: `
  &lt;uia-switch [settings]="primarySettings"&gt;&lt;/uia-switch&gt;
  &lt;uia-switch [settings]="secondarySettings"&gt;&lt;/uia-switch&gt;
  &lt;uia-switch [settings]="warningSettings"&gt;&lt;/uia-switch&gt;
  &lt;uia-switch [settings]="successSettings"&gt;&lt;/uia-switch&gt;
  &lt;uia-switch [settings]="dangerSettings"&gt;&lt;/uia-switch&gt;
  &lt;uia-switch [settings]="infoSettings"&gt;&lt;/uia-switch&gt;
  &lt;uia-switch [settings]="lightSettings"&gt;&lt;/uia-switch&gt;
  &lt;uia-switch [settings]="darkSettings"&gt;&lt;/uia-switch&gt;`,
  componentCode: `
  // For showing switch in primary color
  this.primarySettings = {
    color: UIA_THEME.PRIMARY,
    size: SWITCHES_SIZE.DEFAULT
  };

  // For showing switch in secondary color
  this.secondarySettings = {
    color: UIA_THEME.SECONDARY,
    size: SWITCHES_SIZE.DEFAULT
  };

  // For showing switch in warning color
  this.warningSettings = {
    color: UIA_THEME.WARNING,
    size: SWITCHES_SIZE.DEFAULT
  };

  // For showing switch in success color
  this.successSettings = {
    color: UIA_THEME.SUCCESS,
    size: SWITCHES_SIZE.DEFAULT
  };

  // For showing switch in danger color
  this.dangerSettings = {
    color: UIA_THEME.DANGER,
    size: SWITCHES_SIZE.DEFAULT
  };

  // For showing switch in info color
  this.infoSettings = {
    color: UIA_THEME.INFO,
    size: SWITCHES_SIZE.DEFAULT
  };

  // For showing switch in light color
  this.lightSettings = {
    color: UIA_THEME.LIGHT,
    size: SWITCHES_SIZE.DEFAULT
  };

  // For showing switch in dark color
  this.darkSettings = {
    color: UIA_THEME.DARK,
    size: SWITCHES_SIZE.DEFAULT
  };`
},
{
  id: 3,
  name: 'Size',
  type: 'code',
  htmlCode: `
  &lt;uia-switch [settings]="defaultSwitchsettings"&gt;&lt;/uia-switch&gt;
  &lt;uia-switch [settings]="largeSwitchSettings"&gt;&lt;/uia-switch&gt;`,
  componentCode: `
  // For showing switch of default size
  this.defaultSwitchSettings = {
    color: UIA_THEME.PRIMARY,
    size: SWITCHES_SIZE.DEFAULT
  };

  // For showing switch of large size
  this.largeSwitchSettings = {
    color: UIA_THEME.PRIMARY,
    size: SWITCHES_SIZE.LARGE
  };`
},
{
  id: 4,
  name: 'Checked',
  type: 'code',
  htmlCode: `
  &lt;uia-switch [settings]="settings" [checked]="true"&gt;&lt;/uia-switch&gt;
  &lt;uia-switch [settings]="settings" [checked]="false"&gt;&lt;/uia-switch&gt;`,
  componentCode: `
  this.settings = {
    color: UIA_THEME.PRIMARY,
    size: SWITCHES_SIZE.DEFAULT
  };

  this.settings = {
    color: UIA_THEME.PRIMARY,
    size: SWITCHES_SIZE.DEFAULT
  };`
},
{
  id: 5,
  name: 'disabled',
  type: 'code',
  htmlCode: `
  &lt;uia-switch [settings]="settings" [disabled]="true"&gt;&lt;/uia-switch&gt;`,
  componentCode: `
  this.settings = {
    color: UIA_THEME.PRIMARY,
    size: SWITCHES_SIZE.DEFAULT
  };`
}];
