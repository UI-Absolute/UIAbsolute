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
  primarySettings: RadioConfig;
  secondarySettings: RadioConfig;
  warningSettings: RadioConfig;
  successSettings: RadioConfig;
  dangerSettings: RadioConfig;
  infoSettings: RadioConfig;
  lightSettings: RadioConfig;
  darkSettings: RadioConfig;
  primaryVerticalSettings: RadioConfig;
  secondaryVerticalSettings: RadioConfig;
  warningVerticalSettings: RadioConfig;
  successVerticalSettings: RadioConfig;
  dangerVerticalSettings: RadioConfig ;
  infoVerticalSettings: RadioConfig;
  lightVerticalSettings: RadioConfig;
  darkVerticalSettings: RadioConfig;

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
    align: RADIO_ALIGN.VERTICAL
  };
  this.secondaryVerticalSettings = {
    color: UIA_THEME.SECONDARY,
    align: RADIO_ALIGN.VERTICAL
  };
  this.warningVerticalSettings = {
    color: UIA_THEME.WARNING,
    align: RADIO_ALIGN.VERTICAL
  };
  this.successVerticalSettings = {
    color: UIA_THEME.SUCCESS,
    align: RADIO_ALIGN.VERTICAL
  };
  this.dangerVerticalSettings = {
    color: UIA_THEME.DANGER,
    align: RADIO_ALIGN.VERTICAL
  };
  this.infoVerticalSettings = {
    color: UIA_THEME.INFO,
    align: RADIO_ALIGN.VERTICAL
  };
  this.lightVerticalSettings = {
    color: UIA_THEME.LIGHT,
    align: RADIO_ALIGN.VERTICAL
  };
  this.darkVerticalSettings = {
    color: UIA_THEME.DARK,
    align: RADIO_ALIGN.VERTICAL
  };
  
  this.icon = "<i class='fas fa-male'></i> Male"
  
  this.icon2 = "<i class='fas fa-female'></i> Female"
  }

}
