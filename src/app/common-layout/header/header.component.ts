import { Component, OnInit } from '@angular/core';
import { version } from 'package.json';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  version: string;

  constructor() { }

  ngOnInit() {
    this.version = environment.appVersion;
  }

}
