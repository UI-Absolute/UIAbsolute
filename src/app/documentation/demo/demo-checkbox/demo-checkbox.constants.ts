export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/checkbox', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/checkbox', fragment: 'examples', children: [
    {
      name: 'Basic', routerUrl: '/documentation/checkbox', fragment: 'basic', children: []
    }, {
      name: 'Colors', routerUrl: '/documentation/checkbox', fragment: 'colors', children: []
    }, {
      name: 'Alignment', routerUrl: '/documentation/checkbox', fragment: 'alignment', children: []
    }, {
      name: 'Label', routerUrl: '/documentation/checkbox', fragment: 'label', children: []
    }, {
      name: 'Label with icon', routerUrl: '/documentation/checkbox', fragment: 'labelWithIcon', children: []
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
  <span class="import-initial">import </span><span class="import-braces">{</span><span> UIACheckboxModule </span>`
  + `<span class="import-braces">}</span><span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;

  <span class="import-initial">@NgModule({</span>
    <span>imports: </span><span class="import-package">[ UIACheckboxModule,... ]</span>
  <span class="import-initial">})</span>

`},
{
  id: 1,
  name: 'Basic',
  type: 'code',
  htmlCode: `
  &lt;uia-checkbox [settings]="settings"&gt;&lt;/uia-checkbox&gt;`,
  componentCode: `
  this.settings = {
    color: UIA_THEME.PRIMARY,
    align: CHECKBOX_ALIGN.DEFAULT
  };`
},
{
  id: 2,
  name: 'Colors',
  type: 'code',
  htmlCode: `
  &lt;uia-checkbox [settings]="primarySettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="secondarySettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="warningSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="successSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="dangerSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="infoSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="lightSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="darkSettings"&gt;&lt;/uia-checkbox&gt;`,
  componentCode: `
  // For showing checkbox in primary color
  this.primarySettings = {
    color: UIA_THEME.PRIMARY
  };

  // For showing checkbox in secondary color
  this.secondarySettings = {
    color: UIA_THEME.SECONDARY
  };

  // For showing checkbox in warning color
  this.warningSettings = {
    color: UIA_THEME.WARNING
  };

  // For showing checkbox in success color
  this.successSettings = {
    color: UIA_THEME.SUCCESS
  };

  // For showing checkbox in danger color
  this.dangerSettings = {
    color: UIA_THEME.DANGER
  };

  // For showing checkbox in info color
  this.infoSettings = {
    color: UIA_THEME.INFO
  };

  // For showing checkbox in light color
  this.lightSettings = {
    color: UIA_THEME.LIGHT
  };

  // For showing checkbox in dark color
  this.darkSettings = {
    color: UIA_THEME.DARK
  };`
},
{
  id: 3,
  name: 'Alignment',
  type: 'code',
  htmlCode: `
  &lt;uia-checkbox [settings]="primarySettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="secondarySettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="warningSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="successSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="dangerSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="infoSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="lightSettings"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="darkSettings"&gt;&lt;/uia-checkbox&gt;`,
  componentCode: `
  // For showing checkbox in primary color with vertical alignment
  this.primarySettings = {
    color: UIA_THEME.PRIMARY,
    align: CHECKBOX_ALIGN.VERTICAL
  };

  // For showing checkbox in secondary color with vertical alignment
  this.secondarySettings = {
    color: UIA_THEME.SECONDARY,
    align: CHECKBOX_ALIGN.VERTICAL
  };

  // For showing checkbox in warning color with vertical alignment
  this.warningSettings = {
    color: UIA_THEME.WARNING,
    align: CHECKBOX_ALIGN.VERTICAL
  };

  // For showing checkbox in success color with vertical alignment
  this.successSettings = {
    color: UIA_THEME.SUCCESS,
    align: CHECKBOX_ALIGN.VERTICAL
  };

  // For showing checkbox in danger color with vertical alignment
  this.dangerSettings = {
    color: UIA_THEME.DANGER,
    align: CHECKBOX_ALIGN.VERTICAL
  };

  // For showing checkbox in info color with vertical alignment
  this.infoSettings = {
    color: UIA_THEME.INFO,
    align: CHECKBOX_ALIGN.VERTICAL
  };

  // For showing checkbox in light color with vertical alignment
  this.lightSettings = {
    color: UIA_THEME.LIGHT,
    align: CHECKBOX_ALIGN.VERTICAL
  };

  // For showing checkbox in dark color with vertical alignment
  this.darkSettings = {
    color: UIA_THEME.DARK,
    align: CHECKBOX_ALIGN.VERTICAL
  };`
},
{
  id: 4,
  name: 'Label',
  type: 'code',
  htmlCode: `
  &lt;uia-checkbox [settings]="settings" [label]="'Option 18'" [id]="'option18'"&gt;&lt;/uia-checkbox&gt;`,
  componentCode: `
  // For showing checkbox in primary color
  this.settings = {
    color: UIA_THEME.PRIMARY,
    align: CHECKBOX_ALIGN.DEFAULT
  };`
}, {
  id: 5,
  name: 'Checked',
  type: 'code',
  htmlCode: `
  &lt;uia-checkbox [settings]="settings" [checked]="true"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="settings" [checked]="false"&gt;&lt;/uia-checkbox&gt;`,
  componentCode: `
  // For showing checkbox in primary color
  this.settings = {
    color: UIA_THEME.PRIMARY
  };

  this.settings = {
    color: UIA_THEME.PRIMARY
  };`
}, {
  id: 6,
  name: 'Disabled',
  type: 'code',
  htmlCode: `
  &lt;uia-checkbox [settings]="settings" [disabled]="true"&gt;&lt;/uia-checkbox&gt;`,
  componentCode: `
  // For showing checkbox in primary color
  this.settings = {
    color: UIA_THEME.PRIMARY
  };`
}, {
  id: 7,
  name: 'Icon',
  type: 'code',
  htmlCode: `
  &lt;uia-checkbox [settings]="settings" [label]="icon"&gt;&lt;/uia-checkbox&gt;
  &lt;uia-checkbox [settings]="settings" [label]="icon2"&gt;&lt;/uia-checkbox&gt;`,
  componentCode: `
  // For showing icon with checkbox
  this.settings = {
    color: UIA_THEME.PRIMARY
  };

  this.icon = "&lt;i class='far fa-credit-card'&gt;&lt;/i&gt; Cards Accepted"
  this.icon2 = "&lt;i class='far fa-money-bill-alt'&gt;&lt;/i&gt; Cash Accepted"
  `
}];
