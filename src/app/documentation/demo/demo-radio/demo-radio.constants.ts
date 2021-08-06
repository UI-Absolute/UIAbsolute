export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/radio', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/radio', fragment: 'examples', children: [
    {
      name: 'Basic', routerUrl: '/documentation/radio', fragment: 'basic', children: []
    }, {
      name: 'Colors', routerUrl: '/documentation/radio', fragment: 'colors', children: []
    }, {
      name: 'Alignment', routerUrl: '/documentation/radio', fragment: 'alignment', children: []
    }, {
      name: 'Label', routerUrl: '/documentation/radio', fragment: 'label', children: []
    }, {
      name: 'Label with icon', routerUrl: '/documentation/radio', fragment: 'labelWithIcon', children: []
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

`},
{
  id: 1,
  name: 'Basic',
  type: 'code',
  htmlCode: `
  &lt;uia-radio [settings]="settings" [checked]="true" [name]="'groupA'" [label]="'Option 1'" [id]="'option1'"&gt;&lt;/uia-radio&gt;`,
  componentCode: `
  this.settings = {
    color: UIA_THEME.PRIMARY,
    align: RADIO_ALIGN.DEFAULT
  };`
},
{
  id: 2,
  name: 'Colors',
  type: 'code',
  htmlCode: `
  &lt;uia-radio [settings]="primarySettings" [checked]="true" [label]="'Option 1'" [id]="'option9'" [name]="'groupB'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="secondarySettings" [label]="'Option 2'" [id]="'option2'" [name]="'groupB'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="warningSettings" [label]="'Option 3'" [id]="'option3'" [name]="'groupB'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="successSettings" [label]="'Option 4'" [id]="'option4'" [name]="'groupB'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="dangerSettings" [label]="'Option 5'" [id]="'option5'" [name]="'groupB'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="infoSettings" [label]="'Option 6'" [id]="'option6'" [name]="'groupB'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="lightSettings" [label]="'Option 7'" [id]="'option7'" [name]="'groupB'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="darkSettings" [label]="'Option 8'" [id]="'option8'" [name]="'groupB'"&gt;&lt;/uia-radio&gt;`,
  componentCode: `
  // For showing radio in primary color
  this.primarySettings = {
    color: UIA_THEME.PRIMARY,
    align: RADIO_ALIGN.DEFAULT
  };

  // For showing radio in secondary color
  this.secondarySettings = {
    color: UIA_THEME.SECONDARY,
    align: RADIO_ALIGN.DEFAULT
  };

  // For showing radio in warning color
  this.warningSettings = {
    color: UIA_THEME.WARNING,
    align: RADIO_ALIGN.DEFAULT
  };

  // For showing radio in success color
  this.successSettings = {
    color: UIA_THEME.SUCCESS,
    align: RADIO_ALIGN.DEFAULT
  };

  // For showing radio in danger color
  this.dangerSettings = {
    color: UIA_THEME.DANGER,
    align: RADIO_ALIGN.DEFAULT
  };

  // For showing radio in info color
  this.infoSettings = {
    color: UIA_THEME.INFO,
    align: RADIO_ALIGN.DEFAULT
  };

  // For showing radio in light color
  this.lightSettings = {
    color: UIA_THEME.LIGHT,
    align: RADIO_ALIGN.DEFAULT
  };

  // For showing radio in dark color
  this.darkSettings = {
    color: UIA_THEME.DARK,
    align: RADIO_ALIGN.DEFAULT
  };`
},
{
  id: 3,
  name: 'Alignment',
  type: 'code',
  htmlCode: `
  &lt;uia-radio [settings]="primarySettings" [checked]="true" [label]="'Option 1'" [id]="'option10'" [name]="'groupC'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="secondarySettings" [label]="'Option 2'" [id]="'option11'" [name]="'groupC'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="warningSettings" [label]="'Option 3'" [id]="'option12'" [name]="'groupC'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="successSettings" [label]="'Option 4'" [id]="'option13'" [name]="'groupC'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="dangerSettings" [label]="'Option 5'" [id]="'option14'" [name]="'groupC'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="infoSettings" [label]="'Option 6'" [id]="'option15'" [name]="'groupC'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="lightSettings" [label]="'Option 7'" [id]="'option16'" [name]="'groupC'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="darkSettings" [label]="'Option 8'" [id]="'option17'" [name]="'groupC'"&gt;&lt;/uia-radio&gt;`,
  componentCode: `
  // For showing radio in primary color with vertical alignment
  this.primarySettings = {
    color: UIA_THEME.PRIMARY,
    align: RADIO_ALIGN.VERTICAL
  };

  // For showing radio in secondary color with vertical alignment
  this.secondarySettings = {
    color: UIA_THEME.SECONDARY,
    align: RADIO_ALIGN.VERTICAL
  };

  // For showing radio in warning color with vertical alignment
  this.warningSettings = {
    color: UIA_THEME.WARNING,
    align: RADIO_ALIGN.VERTICAL
  };

  // For showing radio in success color with vertical alignment
  this.successSettings = {
    color: UIA_THEME.SUCCESS,
    align: RADIO_ALIGN.VERTICAL
  };

  // For showing radio in danger color with vertical alignment
  this.dangerSettings = {
    color: UIA_THEME.DANGER,
    align: RADIO_ALIGN.VERTICAL
  };

  // For showing radio in info color with vertical alignment
  this.infoSettings = {
    color: UIA_THEME.INFO,
    align: RADIO_ALIGN.VERTICAL
  };

  // For showing radio in light color with vertical alignment
  this.lightSettings = {
    color: UIA_THEME.LIGHT,
    align: RADIO_ALIGN.VERTICAL
  };

  // For showing radio in dark color with vertical alignment
  this.darkSettings = {
    color: UIA_THEME.DARK,
    align: RADIO_ALIGN.VERTICAL
  };`
},
{
  id: 4,
  name: 'Label',
  type: 'code',
  htmlCode: `
  &lt;uia-radio [settings]="settings" [checked]="true" [name]="'groupD'" [label]="'Option 1'" [id]="'option18'"&gt;&lt;/uia-radio&gt;`,
  componentCode: `
  // For showing radio in primary color
  this.settings = {
    color: UIA_THEME.PRIMARY,
    align: RADIO_ALIGN.DEFAULT
  };`
},
{
  id: 5,
  name: 'Icon',
  type: 'code',
  htmlCode: `
  &lt;uia-radio [settings]="settings" [checked]="true" [label]="'icon'" [id]="'option19'" [name]="'groupE'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="settings" [label]="'icon2'" [id]="'option20'" [name]="'groupE'"&gt;&lt;/uia-radio&gt;`,
  componentCode: `
  // For showing icon with icon
  this.settings = {
    color: UIA_THEME.PRIMARY
  };

  this.icon = "&lt;i class='fas fa-male'&gt;&lt;/i&gt; Male"
  this.icon2 = "&lt;i class='fas fa-female'&gt;&lt;/i&gt; Female"
  `
}, {
  id: 6,
  name: 'Checked',
  type: 'code',
  htmlCode: `
  &lt;uia-radio [settings]="settings" [checked]="true" [label]="'Option 1'" [id]="'option21'" [name]="'groupF'"&gt;&lt;/uia-radio&gt;
  &lt;uia-radio [settings]="settings" [checked]="false" [label]="'Option 2'" [id]="'option22'" [name]="'groupF'"&gt;&lt;/uia-radio&gt;`,
  componentCode: `
  // For showing radio in primary color
  this.settings = {
    color: UIA_THEME.PRIMARY
  };

  this.settings = {
    color: UIA_THEME.PRIMARY
  };`
}, {
  id: 7,
  name: 'Disabled',
  type: 'code',
  htmlCode: `
  &lt;uia-radio [settings]="settings" [disabled]="true" [label]="'Option 1'" [id]="'option23'" [name]="'groupG'"&gt;&lt;/uia-radio&gt;`,
  componentCode: `
  // For showing radio in primary color
  this.settings = {
    color: UIA_THEME.PRIMARY
  };`
}];
