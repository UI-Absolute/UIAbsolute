import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { version } from 'package.json';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnChanges {

  version: string;
  isHome: boolean;

  @Input() mobileHumburger: boolean;
  @Output() mobilePanel: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private route: Router
  ) {
    this.isHome = this.route.url === '/' ? true : false;
  }

  ngOnInit() {
    this.version = environment.appVersion;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  openSidenav(){
    this.mobileHumburger = !this.mobileHumburger;
    this.mobilePanel.emit(this.mobileHumburger);
  }

}
