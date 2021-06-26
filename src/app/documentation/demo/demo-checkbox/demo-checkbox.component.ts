import { Component, OnInit } from '@angular/core';
import { CheckboxConfig, CHECKBOX_ALIGN, UIA_THEME } from 'ui-absolute';
import { DEMO_CODE, PAGE_NAV } from './demo-checkbox.constants';

@Component({
  selector: 'app-demo-checkbox',
  templateUrl: './demo-checkbox.component.html',
  styleUrls: ['./demo-checkbox.component.scss']
})
export class DemoCheckboxComponent implements OnInit {

  settings: CheckboxConfig;
  secondarySettings: CheckboxConfig;
  warningSettings: CheckboxConfig;
  successSettings: CheckboxConfig;
  dangerSettings: CheckboxConfig;
  infoSettings: CheckboxConfig;
  lightSettings: CheckboxConfig;
  darkSettings: CheckboxConfig;
  horizontalCheckboxSettings: CheckboxConfig;

  pageNav;
  demoCode;

  constructor() { }

  ngOnInit() {
    this.pageNav = PAGE_NAV;

    this.demoCode = DEMO_CODE;

    this.settings = {
      color: UIA_THEME.PRIMARY
    }

    this.secondarySettings = {
      color: UIA_THEME.SECONDARY
    };
    this.warningSettings = {
      color: UIA_THEME.WARNING
    };
    this.successSettings = {
      color: UIA_THEME.SUCCESS
    };
    this.dangerSettings = {
      color: UIA_THEME.DANGER
    };
    this.infoSettings = {
      color: UIA_THEME.INFO
    };
    this.lightSettings = {
      color: UIA_THEME.LIGHT
    };
    this.darkSettings = {
      color: UIA_THEME.DARK
    };
    this.horizontalCheckboxSettings = {
      color: UIA_THEME.SUCCESS,
      align: CHECKBOX_ALIGN.HORIZONTAL
    }

  }

}
