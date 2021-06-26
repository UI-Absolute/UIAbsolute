import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-code',
  templateUrl: './demo-code.component.html',
  styleUrls: ['./demo-code.component.scss']
})
export class DemoCodeComponent implements OnInit {

  @Input() demoCode: any;

  constructor() { }

  ngOnInit() {
  }

}
