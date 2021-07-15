import { Component, OnInit } from '@angular/core';
import { DEMO_CODE } from './documentation-details.constants';

@Component({
  selector: 'app-documentation-details',
  templateUrl: './documentation-details.component.html',
  styleUrls: ['./documentation-details.component.scss']
})
export class DocumentationDetailsComponent implements OnInit {
  demoCode;

  constructor() { }

  ngOnInit() {
    this.demoCode = DEMO_CODE;
  }

}
