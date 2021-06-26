export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/badges', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/badges', fragment: 'examples', children:[
    {
      name: 'Basic', routerUrl: '/documentation/badges', fragment: 'basic', children: []
    }, {
      name: 'Badges in Button', routerUrl: '/documentation/badges', fragment: 'badgesInButton', children: []
    }, {
      name: 'Background colors', routerUrl: '/documentation/badges', fragment: 'backgroundColors', children: []
    }, {
      name: 'Pill Badges', routerUrl: '/documentation/badges', fragment: 'pillBadges', children: []
    }
  ]
}];

export const DEMO_CODE = [{
  id: 0,
  name: 'Usage',
  type: 'usage',
  htmlCode: ``,
  componentCode: `
  <span class="import-initial">import </span><span class="import-braces">{</span><span> UIABadgesModule </span><span class="import-braces">}</span><span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;

  <span class="import-initial">@NgModule({</span>
    <span>imports: </span><span class="import-package">[ UIABadgesModule,... ]</span>
  <span class="import-initial">})</span>

`},
{
  id: 1,
  name: 'Basic',
  type: 'code',
  htmlCode: `
  &lt;h1&gt;Some heading &lt;uia-badge [settings]="settings" [value]="'Hello'"&gt;&lt;/uia-badge&gt; &lt;/h1&gt;
  &lt;h2&gt;Some heading &lt;uia-badge [settings]="settings" [value]="'Hello'"&gt;&lt;/uia-badge&gt; &lt;/h2&gt;
  &lt;h3&gt;Some heading &lt;uia-badge [settings]="settings" [value]="'Hello'"&gt;&lt;/uia-badge&gt; &lt;/h3&gt;
  &lt;h4&gt;Some heading &lt;uia-badge [settings]="settings" [value]="'Hello'"&gt;&lt;/uia-badge&gt; &lt;/h4&gt;
  &lt;h5&gt;Some heading &lt;uia-badge [settings]="settings" [value]="'Hello'"&gt;&lt;/uia-badge&gt; &lt;/h5&gt;
  &lt;h6&gt;Some heading &lt;uia-badge [settings]="settings" [value]="'Hello'"&gt;&lt;/uia-badge&gt; &lt;/h6&gt;`,
  componentCode: `
  this.settings = {
    'bg_color': UIA_THEME.PRIMARY,
    'shape': BADGES_SHAPE.DEFAULT
  };`
},
{
  id: 2,
  name: 'Badges_in_Button',
  type: 'code',
  htmlCode: `
  &lt;button type="button" class="btn btn-primary"&gt;Notifications &lt;uia-badge [settings]="notificationSettings" [value]="'7'"&gt;&lt;/uia-badge&gt;&lt;/button&gt;`,
  componentCode: `
  this.notificationSettings = {
    'bg_color': UIA_THEME.LIGHT,
    'shape': BADGES_SHAPE.ROUNDED
  };`
},
{
  id: 3,
  name: 'Background_colors',
  type: 'code',
  htmlCode: `
  &lt;uia-badge [settings]="primarySettings" [value]="'Primary'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="secondarySettings" [value]="'Secondary'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="warningSettings" [value]="'Warning'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="successSettings" [value]="'Success'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="dangerSettings" [value]="'Danger'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="infoSettings" [value]="'Info'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="lightSettings" [value]="'Light'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="darkSettings" [value]="'Dark'"&gt;&lt;/uia-badge&gt;`,
  componentCode: `
  // For showing default badge with primary theme
  this.primarySettings = {
    'bg_color': UIA_THEME.PRIMARY,
    'shape': BADGES_SHAPE.DEFAULT
  };

  // For showing default badge with secondary theme
  this.secondarySettings = {
    'bg_color': UIA_THEME.SECONDARY,
    'shape': BADGES_SHAPE.DEFAULT
  };

  // For showing default badge with warning theme
  this.warningSettings = {
    'bg_color': UIA_THEME.WARNING,
    'shape': BADGES_SHAPE.DEFAULT
  };

  // For showing default badge with success theme
  this.successSettings = {
    'bg_color': UIA_THEME.SUCCESS,
    'shape': BADGES_SHAPE.DEFAULT
  };

  // For showing default badge with danger theme
  this.dangerSettings = {
    'bg_color': UIA_THEME.DANGER,
    'shape': BADGES_SHAPE.DEFAULT
  };

  // For showing default badge with info theme
  this.infoSettings = {
    'bg_color': UIA_THEME.INFO,
    'shape': BADGES_SHAPE.DEFAULT
  };

  // For showing default badge with light theme
  this.lightSettings = {
    'bg_color': UIA_THEME.LIGHT,
    'shape': BADGES_SHAPE.DEFAULT
  };

  // For showing default badge with dark theme
  this.darkSettings = {
    'bg_color': UIA_THEME.DARK,
    'shape': BADGES_SHAPE.DEFAULT
  };`
},
{
  id: 4,
  name: 'Pill_Badges',
  type: 'code',
  htmlCode: `
  &lt;uia-badge [settings]="primaryPill" [value]="'Primary'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="secondaryPill" [value]="'Secondary'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="warningPill" [value]="'Warning'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="successPill" [value]="'Success'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="dangerPill" [value]="'Danger'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="infoPill" [value]="'Info'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="lightPill" [value]="'Light'"&gt;&lt;/uia-badge&gt;
  &lt;uia-badge [settings]="darkPill" [value]="'Dark'"&gt;&lt;/uia-badge&gt;`,
  componentCode: `
  // For showing pill badge with primary theme
  this.primaryPill = {
    'bg_color': UIA_THEME.PRIMARY,
    'shape': BADGES_SHAPE.ROUNDED
  };

  // For showing pill badge with secondary theme
  this.secondaryPill = {
    'bg_color': UIA_THEME.SECONDARY,
    'shape': BADGES_SHAPE.ROUNDED
  };

  // For showing pill badge with warning theme
  this.warningPill = {
    'bg_color': UIA_THEME.WARNING,
    'shape': BADGES_SHAPE.ROUNDED
  };

  // For showing pill badge with success theme
  this.successPill = {
    'bg_color': UIA_THEME.SUCCESS,
    'shape': BADGES_SHAPE.ROUNDED
  };

  // For showing pill badge with danger theme
  this.dangerPill = {
    'bg_color': UIA_THEME.DANGER,
    'shape': BADGES_SHAPE.ROUNDED
  };

  // For showing pill badge with info theme
  this.infoPill = {
    'bg_color': UIA_THEME.INFO,
    'shape': BADGES_SHAPE.ROUNDED
  };

  // For showing pill badge with light theme
  this.lightPill = {
    'bg_color': UIA_THEME.LIGHT,
    'shape': BADGES_SHAPE.ROUNDED
  };

  // For showing pill badge with dark theme
  this.darkPill = {
    'bg_color': UIA_THEME.DARK,
    'shape': BADGES_SHAPE.ROUNDED
  };`
}]
