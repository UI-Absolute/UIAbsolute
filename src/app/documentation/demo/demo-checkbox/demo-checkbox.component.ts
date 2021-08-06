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
  primarySettings: CheckboxConfig;
  secondarySettings: CheckboxConfig;
  warningSettings: CheckboxConfig;
  successSettings: CheckboxConfig;
  dangerSettings: CheckboxConfig;
  infoSettings: CheckboxConfig;
  lightSettings: CheckboxConfig;
  darkSettings: CheckboxConfig;
  primaryVerticalSettings: CheckboxConfig;
  secondaryVerticalSettings: CheckboxConfig;
  warningVerticalSettings: CheckboxConfig;
  successVerticalSettings: CheckboxConfig;
  dangerVerticalSettings: CheckboxConfig;
  infoVerticalSettings: CheckboxConfig;
  lightVerticalSettings: CheckboxConfig;
  darkVerticalSettings: CheckboxConfig;
  horizontalCheckboxSettings: CheckboxConfig;

  pageNav;
  demoCode;
  icon: string;
  icon2: string;


  constructor() { }

  ngOnInit() {
    this.pageNav = PAGE_NAV;

    this.demoCode = DEMO_CODE;

    this.settings = {
      color: UIA_THEME.PRIMARY
    };

    this.primarySettings = {
      color: UIA_THEME.PRIMARY
    };

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

    this.primaryVerticalSettings = {
      color: UIA_THEME.PRIMARY,
      align: CHECKBOX_ALIGN.VERTICAL
    };
    this.secondaryVerticalSettings = {
      color: UIA_THEME.SECONDARY,
      align: CHECKBOX_ALIGN.VERTICAL
    };
    this.warningVerticalSettings = {
      color: UIA_THEME.WARNING,
      align: CHECKBOX_ALIGN.VERTICAL
    };
    this.successVerticalSettings = {
      color: UIA_THEME.SUCCESS,
      align: CHECKBOX_ALIGN.VERTICAL
    };
    this.dangerVerticalSettings = {
      color: UIA_THEME.DANGER,
      align: CHECKBOX_ALIGN.VERTICAL
    };
    this.infoVerticalSettings = {
      color: UIA_THEME.INFO,
      align: CHECKBOX_ALIGN.VERTICAL
    };
    this.lightVerticalSettings = {
      color: UIA_THEME.LIGHT,
      align: CHECKBOX_ALIGN.VERTICAL
    };
    this.darkVerticalSettings = {
      color: UIA_THEME.DARK,
      align: CHECKBOX_ALIGN.VERTICAL
    };

    this.icon = '<i class=\'far fa-credit-card\'></i> Cards Accepted';

    this.icon2 = '<i class=\'far fa-money-bill-alt\'></i> Cash Accepted';

  }

}
