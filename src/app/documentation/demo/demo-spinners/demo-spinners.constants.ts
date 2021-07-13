export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/spinners', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/spinners', fragment: 'examples', children: [
    {
      name: 'Basic', routerUrl: '/documentation/spinners', fragment: 'basic', children: []
    }, {
      name: 'Colors', routerUrl: '/documentation/spinners', fragment: 'colors', children: []
    }, {
      name: 'Text with Spinner', routerUrl: '/documentation/spinners', fragment: 'textWithSpinner', children: []
    }, {
      name: 'Speed', routerUrl: '/documentation/spinners', fragment: 'speed', children: []
    }, {
      name: 'Button with Spinner', routerUrl: '/documentation/spinners', fragment: 'buttonWithSpinner', children: []
    },
  ]
}];

export const DEMO_CODE = [{
  id: 0,
  name: 'Usage',
  type: 'usage',
  htmlCode: ``,
  componentCode: `
  <span class="import-initial">import </span><span class="import-braces">{</span><span> UIASpinnersModule </span><span class="import-braces">}</span><span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;

  <span class="import-initial">@NgModule({</span>
    <span>imports: </span><span class="import-package">[ UIASpinnersModule,... ]</span>
  <span class="import-initial">})</span>

`},
{
  id: 1,
  name: 'Basic',
  type: 'code',
  htmlCode: `
  &lt;uia-spinner [settings]="settings"&gt;&lt;/uia-spinner&gt;`,
  componentCode: `
  this.settings = {
    color: UIA_THEME.PRIMARY,
    size: SPINNERS_SIZE.DEFAULT
  };`
},
{
  id: 2,
  name: 'Colors',
  type: 'code',
  htmlCode: `
  &lt;uia-spinner [settings]="primarySettings"&gt;&lt;/uia-spinner&gt;
  &lt;uia-spinner [settings]="secondarySettings"&gt;&lt;/uia-spinner&gt;
  &lt;uia-spinner [settings]="warningSettings"&gt;&lt;/uia-spinner&gt;
  &lt;uia-spinner [settings]="successSettings"&gt;&lt;/uia-spinner&gt;
  &lt;uia-spinner [settings]="dangerSettings"&gt;&lt;/uia-spinner&gt;
  &lt;uia-spinner [settings]="infoSettings"&gt;&lt;/uia-spinner&gt;
  &lt;uia-spinner [settings]="lightSettings"&gt;&lt;/uia-spinner&gt;
  &lt;uia-spinner [settings]="darkSettings"&gt;&lt;/uia-spinner&gt;`,
  componentCode: `
  // For showing spinner in primary color
  this.primarySettings = {
    color: UIA_THEME.PRIMARY,
    size: SPINNERS_SIZE.DEFAULT
  };

  // For showing spinner in secondary color
  this.secondarySettings = {
    color: UIA_THEME.SECONDARY,
    size: SPINNERS_SIZE.DEFAULT
  };

  // For showing spinner in warning color
  this.warningSettings = {
    color: UIA_THEME.WARNING,
    size: SPINNERS_SIZE.DEFAULT
  };

  // For showing spinner in success color
  this.successSettings = {
    color: UIA_THEME.SUCCESS,
    size: SPINNERS_SIZE.DEFAULT
  };

  // For showing spinner in danger color
  this.dangerSettings = {
    color: UIA_THEME.DANGER,
    size: SPINNERS_SIZE.DEFAULT
  };

  // For showing spinner in info color
  this.infoSettings = {
    color: UIA_THEME.INFO,
    size: SPINNERS_SIZE.DEFAULT
  };

  // For showing spinner in light color
  this.lightSettings = {
    color: UIA_THEME.LIGHT,
    size: SPINNERS_SIZE.DEFAULT
  };

  // For showing spinner in dark color
  this.darkSettings = {
    color: UIA_THEME.DARK,
    size: SPINNERS_SIZE.DEFAULT
  };`
},
{
  id: 3,
  name: 'Text_with_Spinner',
  type: 'code',
  htmlCode: `
  &lt;uia-spinner [settings]="textSpinnerSettings" [loadingText]="'Loading'"&gt;&lt;uia-spinner&gt;`,
  componentCode: `
  this.textSpinnerSettings = {
    color: UIA_THEME.PRIMARY,
    size: SPINNERS_SIZE.DEFAULT
  };`
},
{
  id: 4,
  name: 'Speed',
  type: 'code',
  htmlCode: `
  &lt;uia-spinner [settings]="slowSpinnerSettings" [loadingText]="'I am slow'"&gt;&lt;/uia-spinner&gt;
  &lt;uia-spinner [settings]="defaultSpinnerSettings" [loadingText]="'I am default'"&gt;&lt;/uia-spinner&gt;
  &lt;uia-spinner [settings]="fastSpinnerSettings" [loadingText]="'I am fast'"&gt;&lt;/uia-spinner&gt;`,
  componentCode: `
  // For showing spinner with slow speed
  this.slowSpinnerSettings = {
    color: UIA_THEME.PRIMARY,
    size: SPINNERS_SIZE.DEFAULT,
    speed: SPINNERS_SPEED.SLOW
  };

  // For showing spinner with default speed
  this.defaultSpinnerSettings = {
    color: UIA_THEME.PRIMARY,
    size: SPINNERS_SIZE.DEFAULT,
    speed: SPINNERS_SPEED.DEFAULT
  };

  // For showing spinner with fast speed
  this.fastSpinnerSettings = {
    color: UIA_THEME.PRIMARY,
    size: SPINNERS_SIZE.DEFAULT,
    speed: SPINNERS_SPEED.FAST
  };`
},
{
  id: 5,
  name: 'Button_with_Spinner',
  type: 'code',
  htmlCode: `
  &lt;button class="btn btn-primary" type="button" disabled&gt;
    &lt;uia-spinner [settings]="buttonSpinnerSettings"&gt;
    &lt;/uia-spinner&gt;
    Loading...
  &lt;/button&gt;`,
  componentCode: `
  this.buttonSpinnerSettings = {
  color: UIA_THEME.LIGHT,
  size: SPINNERS_SIZE.SMALL
};`
}];
