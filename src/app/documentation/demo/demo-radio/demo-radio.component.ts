import { Component, OnInit } from '@angular/core';
import { RadioConfig, RADIO_ALIGN, UIA_THEME } from 'ui-absolute';
import { DEMO_CODE, PAGE_NAV } from './demo-radio.constants';

@Component({
  selector: 'app-demo-radio',
  templateUrl: './demo-radio.component.html',
  styleUrls: ['./demo-radio.component.scss']
})
export class DemoRadioComponent implements OnInit {

  settings: RadioConfig;
  secondarySettings: RadioConfig;
  warningSettings: RadioConfig;
  successSettings: RadioConfig;
  dangerSettings: RadioConfig;
  infoSettings: RadioConfig;
  lightSettings: RadioConfig;
  darkSettings: RadioConfig;
  horizontalRadioSettings: RadioConfig;

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
  this.horizontalRadioSettings = {
    color: UIA_THEME.SUCCESS,
    align: RADIO_ALIGN.HORIZONTAL
  }

  }

}
