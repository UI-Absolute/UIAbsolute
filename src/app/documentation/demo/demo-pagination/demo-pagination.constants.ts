export const PAGE_NAV = [{
  name: 'Usage', routerUrl: '/documentation/pagination', fragment: 'usage', children: []
}, {
  name: 'Examples', routerUrl: '/documentation/pagination', fragment: 'examples', children: [
    {
      name: 'Basic', routerUrl: '/documentation/pagination', fragment: 'basic', children: []
    }, {
      name: 'Size', routerUrl: '/documentation/pagination', fragment: 'size', children: []
    }, {
      name: 'Alignment', routerUrl: '/documentation/pagination', fragment: 'alignment', children: []
    }, {
      name: 'Pagination with icon', routerUrl: '/documentation/pagination', fragment: 'paginationWithIcon', children: []
    }, {
      name: 'Table Pagination', routerUrl: '/documentation/pagination', fragment: 'tablePagination', children: []
    }, {
      name: 'Disabled', routerUrl: '/documentation/pagination', fragment: 'disabled', children: []
    },
  ]
}];

export const DEMO_CODE = [{
  id: 0,
  name: 'Usage',
  type: 'usage',
  htmlCode: ``,
  componentCode: `
  <span class="import-initial">import </span><span class="import-braces">{</span><span> UIAPaginationModule </span>`
  + `<span class="import-braces">}</span><span class="import-initial"> from </span><span class="import-package">'ui-absolute'</span>;

  <span class="import-initial">@NgModule({</span>
    <span>imports: </span><span class="import-package">[ UIAPaginationModule,... ]</span>
  <span class="import-initial">})</span>

`},
{
  id: 1,
  name: 'Basic',
  type: 'code',
  htmlCode: `
  &lt;uia-pagination
      [rowsPerPage]="rowsPerPage"
      [totalRows]="95"
      [currentPage]="currentPage"
      [labelFront]="'Previous'"
      [labelEnd]="'Next'"
      (selectedPage)="onSelectedPage($event)"
      (totalRowsPerPage)="onTotalRowsPerPage($event)"&gt;
  &lt;/uia-pagination&gt;`,
  componentCode: `
    rowsPerPage: number = 10;
    currentPage: number = 5;`
},{
  id: 2,
  name: 'Size',
  type: 'code',
  htmlCode: `
  // Large size pagination
  &lt;uia-pagination
      [settings]="settings"
      [rowsPerPage]="rowsPerPage"
      [totalRows]="95"
      [currentPage]="currentPage"
      [labelFront]="'Previous'"
      [labelEnd]="'Next'"
      (selectedPage)="onSelectedPage($event)"
      (totalRowsPerPage)="onTotalRowsPerPage($event)"&gt;
  &lt;/uia-pagination&gt;

  // Small size pagination
  &lt;uia-pagination
      [settings]="smallSettings"
      [rowsPerPage]="rowsPerPage"
      [totalRows]="95"
      [currentPage]="currentPage"
      [labelFront]="'Previous'"
      [labelEnd]="'Next'"
      (selectedPage)="onSelectedPage($event)"
      (totalRowsPerPage)="onTotalRowsPerPage($event)"&gt;
  &lt;/uia-pagination&gt;`,
  componentCode: `
  // Large size pagination
  this.settings = {
    size: PAGINATION_SIZE.LARGE
  }

  // Small size pagination
  this.smallSettings = {
    size: PAGINATION_SIZE.SMALL
  }
  `
},{
  id: 3,
  name: 'Alignment',
  type: 'code',
  htmlCode: `
  // Center align pagination
  &lt;uia-pagination
      [settings]="centerSettings"
      [rowsPerPage]="rowsPerPage"
      [totalRows]="95"
      [currentPage]="currentPage"
      [labelFront]="'Previous'"
      [labelEnd]="'Next'"
      (selectedPage)="onSelectedPage($event)"
      (totalRowsPerPage)="onTotalRowsPerPage($event)"&gt;
  &lt;/uia-pagination&gt;

  // Right align pagination
  &lt;uia-pagination
      [settings]="rightSettings"
      [rowsPerPage]="rowsPerPage"
      [totalRows]="95"
      [currentPage]="currentPage"
      [labelFront]="'Previous'"
      [labelEnd]="'Next'"
      (selectedPage)="onSelectedPage($event)"
      (totalRowsPerPage)="onTotalRowsPerPage($event)"&gt;
  &lt;/uia-pagination&gt;`,
  componentCode: `
  // Center align pagination
  this.centerSettings = {
    align: PAGINATION_ALIGN.CENTER
  }

  // Right align pagination
  this.rightSettings = {
    align: PAGINATION_ALIGN.RIGHT
  }`
},{
  id: 4,
  name: 'Icon',
  type: 'code',
  htmlCode: `
  &lt;uia-pagination
      [rowsPerPage]="rowsPerPage"
      [totalRows]="95"
      [currentPage]="currentPage"
      [labelPrev]="prevIcon"
      [labelNext]="nextIcon"
      (selectedPage)="onSelectedPage($event)"
      (totalRowsPerPage)="onTotalRowsPerPage($event)"&gt;
  &lt;/uia-pagination&gt;`,
  componentCode: `
  this.prevIcon = "&lt;i class='fas fa-angle-double-left'&gt;&lt;/i&gt;";

  this.nextIcon = "&lt;i class='fas fa-angle-double-right'&gt;&lt;/i&gt;";
  `
},
{
  id: 5,
  name: 'Table',
  type: 'code',
  htmlCode: `
  &lt;uia-pagination
      [settings]="tableSettings"
      [rowsPerPage]="rowsPerPage"
      [totalRows]="95"
      [currentPage]="1"
      [labelPrev]="prevIcon"
      [labelNext]="nextIcon"
      [separator]="'of'"
      (selectedPage)="onSelectedPage($event)"
      (totalRowsPerPage)="onTotalRowsPerPage($event)"&gt;
  &lt;/uia-pagination&gt;`,
  componentCode: `
  this.tableSettings = {
    type: PAGINATION_TYPE.TABLE,
    size: PAGINATION_SIZE.DEFAULT,
    align: PAGINATION_ALIGN.DEFAULT
  }`
}];
