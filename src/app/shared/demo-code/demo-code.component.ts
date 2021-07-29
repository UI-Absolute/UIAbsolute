import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-code',
  templateUrl: './demo-code.component.html',
  styleUrls: ['./demo-code.component.scss']
})
export class DemoCodeComponent implements OnInit {

  @Input() demoCode: any;

  previewOpen: string;

  constructor() { }

  ngOnInit() {
    this.previewOpen = 'template';
  }

  copyCode(inputElement){
    const tempInput = document.createElement("input");
    tempInput.value = inputElement.innerText.trim();
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  previewSelected(value) {
    this.previewOpen = value;
  }

}
