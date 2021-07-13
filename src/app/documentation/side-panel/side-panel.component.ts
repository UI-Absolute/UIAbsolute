import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  components: { name: string; navigationUrl: string; }[];
  filterargs: string;

  constructor() { }

  ngOnInit() {
    this.filterargs = '';
    this.components = [{
      name: 'File Uploader',
      navigationUrl: '/documentation/file-uploader'
    }, {
      name: 'Buttons',
      navigationUrl: '/documentation/buttons'
    },
    {
      name: 'Badges',
      navigationUrl: '/documentation/badges'
    },
    {
      name: 'Tooltip',
      navigationUrl: '/documentation/tooltip'
    },
    {
      name: 'Card',
      navigationUrl: '/documentation/underconstruction'
    },
    {
      name: 'Modal',
      navigationUrl: '/documentation/underconstruction'
    },
    {
      name: 'Popover',
      navigationUrl: '/documentation/underconstruction'
    },
    {
      name: 'Side Panel',
      navigationUrl: '/documentation/underconstruction'
    },
    {
      name: 'Toaster',
      navigationUrl: '/documentation/underconstruction'
    },
    {
      name: 'Spinners',
      navigationUrl: '/documentation/spinners'
    },
    {
      name: 'Datepicker',
      navigationUrl: '/documentation/underconstruction'
    },
    {
      name: 'Checkbox',
      navigationUrl: '/documentation/checkbox'
    },
    {
      name: 'Radio Button',
      navigationUrl: '/documentation/radio'
    },
    {
      name: 'Switches',
      navigationUrl: '/documentation/switches'
    },
    {
      name: 'Collapse',
      navigationUrl: '/documentation/underconstruction'
    },
    {
      name: 'Pagination',
      navigationUrl: '/documentation/underconstruction'
    },
    {
      name: 'Treeview',
      navigationUrl: '/documentation/underconstruction'
    }];
    this.components.sort((a, b) => a.name.localeCompare(b.name));
  }

}
