import { Component, OnInit } from '@angular/core';
import { BreadcrumbsConfig, UIA_THEME } from 'projects/ui-absolute/src/public-api';
import { DEMO_CODE, PAGE_NAV } from './demo-breadcrumbs.constant';


@Component({
  selector: 'app-demo-breadcrumbs',
  templateUrl: './demo-breadcrumbs.component.html',
  styleUrls: ['./demo-breadcrumbs.component.scss']
})
export class DemoBreadcrumbsComponent implements OnInit {

  linkStructure;
  linkStructureWithIcon;
  primarySettings: BreadcrumbsConfig;
  secondarySettings: BreadcrumbsConfig;
  warningSettings: BreadcrumbsConfig;
  successSettings: BreadcrumbsConfig;
  dangerSettings: BreadcrumbsConfig;
  infoSettings: BreadcrumbsConfig;
  lightSettings: BreadcrumbsConfig;
  darkSettings: BreadcrumbsConfig;
  seperatorIcon: string;
  defaultSettings: BreadcrumbsConfig;


  pageNav;
  demoCode;

  constructor() { }

  ngOnInit() {

    this.pageNav = PAGE_NAV;
    this.demoCode = DEMO_CODE;
    this.seperatorIcon = '<i class=\'fas fa-caret-right\'></i>';

    this.linkStructure = [
      {
        id: 'home',
        label: 'Home',
        route: '/'
      },
      {
        id: 'list',
        label: 'List',
        route: '/list'
      },
      {
        id: 'details',
        label: 'Details',
        route: '/list/123'
      }
    ];

    this.linkStructureWithIcon = [
      {
        id: 'home', // <= Id of the breadcrumb
        label: '<i class="fas fa-home"></i> Home', // <= Label of the breadcrumb
        route: '/' // <= Route/Navigation url of the breadcrumb which will be used when user click on the breadcrumb
      },
      {
        id: 'list',
        label: 'List',
        route: '/list'
      },
      {
        id: 'details',
        label: 'Details',
        route: '/list/123'
      }
    ];

    this.primarySettings = {
      color: UIA_THEME.PRIMARY
    };

    this.secondarySettings = {
      color: UIA_THEME.SECONDARY
    };

    this.successSettings = {
      color: UIA_THEME.SUCCESS
    };

    this.warningSettings = {
      color: UIA_THEME.WARNING
    };

    this.dangerSettings = {
      color: UIA_THEME.DANGER
    };

    this.darkSettings = {
      color: UIA_THEME.DARK
    };

    this.infoSettings = {
      color: UIA_THEME.INFO
    };

    this.lightSettings = {
      color: UIA_THEME.LIGHT
    };
  }

}
