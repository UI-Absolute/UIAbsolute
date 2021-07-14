import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-details',
  templateUrl: './documentation-details.component.html',
  styleUrls: ['./documentation-details.component.scss']
})
export class DocumentationDetailsComponent implements OnInit {
  demoCode: any[];

  constructor() { }

  ngOnInit() {
    this.demoCode = [{
      id: 0,
      name: 'Usage',
      type: 'usage',
      htmlCode: ``,
      componentCode: `
      npm install ui-absolute --save
    `}]
  }

}
