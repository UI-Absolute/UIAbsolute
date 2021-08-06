import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsConfig, UIA_THEME } from '../../../models';

@Component({
  selector: 'uia-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() seperator: string;
  @Input() links: any;
  @Input() settings: BreadcrumbsConfig;
  breadcrumbsSettings = {
    color: '#343a40'
  };

  constructor(private router: Router) { }

  ngOnInit() {
    this.applySettings(this.settings);
    if (this.seperator) {
      this.seperator = '&nbsp;' + this.seperator + '&nbsp;';
    } else {
      this.seperator = '&nbsp;>&nbsp;';
    }
  }

  applySettings(settings) {
    if (!settings) { return; }
    switch (settings.color) {
      case UIA_THEME.SECONDARY:
        this.breadcrumbsSettings.color = '#6c757d';
        break;
      case UIA_THEME.SUCCESS:
        this.breadcrumbsSettings.color = '#37c936';
        break;
      case UIA_THEME.DANGER:
        this.breadcrumbsSettings.color = '#ff3c7e';
        break;
      case UIA_THEME.WARNING:
        this.breadcrumbsSettings.color = '#ffcc00';
        break;
      case UIA_THEME.INFO:
        this.breadcrumbsSettings.color = '#17a2b8';
        break;
      case UIA_THEME.LIGHT:
        this.breadcrumbsSettings.color = '#f8f9fa';
        break;
      case UIA_THEME.DARK:
        this.breadcrumbsSettings.color = '#343a40';
        break;
      case UIA_THEME.PRIMARY:
        this.breadcrumbsSettings.color = '#007bff';
        break;
      default:
        this.breadcrumbsSettings.color = '#343a40';
    }
  }

  redirect(route, currentIndex, totalIndex) {
    if (currentIndex !== totalIndex) {
      this.router.navigateByUrl(route);
    }
  }

}
