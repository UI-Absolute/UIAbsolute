import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uia-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  constructor() { }

  fields: any;

  ngOnInit() {
    this.fields = [{
      id: 'l0-0',
      name: 'Level 0 - 0',
      children: [{
        id: 'l0-0-0',
        name: 'Level 1 - 0',
        children: [{
          id: 'l0-0-0-0',
          name: 'Level 2 - 0'
        }]
      },
      {
        id: 'l0-0-1',
        name: 'Level 1 - 1',
        children: [{
          id: 'l0-0-1-0',
          name: 'Level 2 - 0'
        },
        {
          id: 'l0-0-1-1',
          name: 'Level 2 - 1'
        }]
      }]
    }]
  }

}
