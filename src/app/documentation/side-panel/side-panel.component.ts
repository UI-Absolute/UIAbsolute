import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  components: { name: string; navigationUrl: string; visibility: boolean }[];
  filterargs: string;

  constructor() { }

  ngOnInit() {
    this.filterargs = '';
    this.components = [{
      name: 'File Uploader',
      navigationUrl: '/documentation/file-uploader',
      visibility: false
    }, {
      name: 'Buttons',
      navigationUrl: '/documentation/buttons',
      visibility: true
    },
    {
      name: 'Badges',
      navigationUrl: '/documentation/badges',
      visibility: true
    },
    {
      name: 'Tooltip',
      navigationUrl: '/documentation/tooltip',
      visibility: false
    },
    {
      name: 'Card',
      navigationUrl: '/documentation/underconstruction',
      visibility: false
    },
    {
      name: 'Modal',
      navigationUrl: '/documentation/underconstruction',
      visibility: false
    },
    {
      name: 'Popover',
      navigationUrl: '/documentation/underconstruction',
      visibility: false
    },
    {
      name: 'Side Panel',
      navigationUrl: '/documentation/underconstruction',
      visibility: false
    },
    {
      name: 'Toaster',
      navigationUrl: '/documentation/underconstruction',
      visibility: false
    },
    {
      name: 'Spinners',
      navigationUrl: '/documentation/spinners',
      visibility: true
    },
    {
      name: 'Datepicker',
      navigationUrl: '/documentation/underconstruction',
      visibility: false
    },
    {
      name: 'Checkbox',
      navigationUrl: '/documentation/checkbox',
      visibility: false
    },
    {
      name: 'Radio Button',
      navigationUrl: '/documentation/radio',
      visibility: false
    },
    {
      name: 'Switches',
      navigationUrl: '/documentation/switches',
      visibility: false
    },
    {
      name: 'Collapse',
      navigationUrl: '/documentation/underconstruction',
      visibility: false
    },
    {
      name: 'Pagination',
      navigationUrl: '/documentation/underconstruction',
      visibility: false
    },
    {
      name: 'Treeview',
      navigationUrl: '/documentation/underconstruction',
      visibility: false
    }];
    this.components.sort((a, b) => a.name.localeCompare(b.name));
  }

}
