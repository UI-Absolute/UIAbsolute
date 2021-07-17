import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  mobilePanelFlag: boolean;
  flag: boolean;

  constructor() { }

  ngOnInit() {
  }

  onMobilePanel(event) {
    this.mobilePanelFlag = event;
    this.flag = event;
  }

  onSidePanel(event) {
    this.mobilePanelFlag = event;
    this.flag = event;
  }

}
