import { Component, OnInit } from '@angular/core';
import { SwitchesConfig, SWITCHES_SIZE, UIA_THEME } from 'ui-absolute';
import { DEMO_CODE, PAGE_NAV } from './demo-switches.constants';

@Component({
  selector: 'app-demo-switches',
  templateUrl: './demo-switches.component.html',
  styleUrls: ['./demo-switches.component.scss']
})
export class DemoSwitchesComponent implements OnInit {

  settings: SwitchesConfig;
  settings1: SwitchesConfig;
  settings2: SwitchesConfig;
  settings3: SwitchesConfig;
  settings4: SwitchesConfig;
  settings5: SwitchesConfig;
  secondarySettings: SwitchesConfig;
  warningSettings: SwitchesConfig;
  successSettings: SwitchesConfig;
  dangerSettings: SwitchesConfig;
  infoSettings: SwitchesConfig;
  lightSettings: SwitchesConfig;
  darkSettings: SwitchesConfig;
  largeSwitchSettings: SwitchesConfig;

  pageNav;
  demoCode;

  constructor() { }

  ngOnInit() {
    this.pageNav = PAGE_NAV;

    this.demoCode = DEMO_CODE;

    this.settings = {
      color: UIA_THEME.PRIMARY,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.settings1 = {
      color: UIA_THEME.PRIMARY,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.settings2 = {
      color: UIA_THEME.PRIMARY,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.settings3 = {
      color: UIA_THEME.PRIMARY,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.settings4 = {
      color: UIA_THEME.PRIMARY,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.settings5 = {
      color: UIA_THEME.PRIMARY,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.secondarySettings = {
      color: UIA_THEME.SECONDARY,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.warningSettings = {
      color: UIA_THEME.WARNING,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.successSettings = {
      color: UIA_THEME.SUCCESS,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.dangerSettings = {
      color: UIA_THEME.DANGER,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.infoSettings = {
      color: UIA_THEME.INFO,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.lightSettings = {
      color: UIA_THEME.LIGHT,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.darkSettings = {
      color: UIA_THEME.DARK,
      size: SWITCHES_SIZE.DEFAULT
    };
    this.largeSwitchSettings = {
      color: UIA_THEME.PRIMARY,
      size: SWITCHES_SIZE.LARGE
    };
  }

}
