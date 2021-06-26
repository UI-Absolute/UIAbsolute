import { Component, OnInit } from '@angular/core';
import { ButtonsConfig, ButtonsToggleConfig, BUTTON_SIZE, UIA_THEME } from 'ui-absolute';
import { DEMO_CODE, PAGE_NAV } from './demo-buttons.constants';

@Component({
  selector: 'app-demo-buttons',
  templateUrl: './demo-buttons.component.html',
  styleUrls: ['./demo-buttons.component.scss']
})
export class DemoButtonsComponent implements OnInit {

  settings: ButtonsConfig;
  secondarySettings: ButtonsConfig;
  warningSettings: ButtonsConfig;
  successSettings: ButtonsConfig;
  dangerSettings: ButtonsConfig;
  infoSettings: ButtonsConfig;
  lightSettings: ButtonsConfig;
  darkSettings: ButtonsConfig;
  primaryOutlineSettings: ButtonsConfig;
  secondaryOutlineSettings: ButtonsConfig;
  warningOutlineSettings: ButtonsConfig;
  successOutlineSettings: ButtonsConfig;
  dangerOutlineSettings: ButtonsConfig;
  infoOutlineSettings: ButtonsConfig;
  lightOutlineSettings: ButtonsConfig;
  darkOutlineSettings: ButtonsConfig;
  smallPrimarySettings: ButtonsConfig;
  smallPrimaryOutlineSettings: ButtonsConfig;
  largePrimarySettings: ButtonsConfig;
  largePrimaryOutlineSettings: ButtonsConfig;
  pageNav;
  demoCode;
  settingsToggle: ButtonsToggleConfig;

  constructor() { }

  ngOnInit() {

    this.pageNav = PAGE_NAV;
    this.demoCode = DEMO_CODE;

    this.settings = {
      bg_color: UIA_THEME.PRIMARY
    };
    this.secondarySettings = {
      bg_color: UIA_THEME.SECONDARY
    }
    this.warningSettings = {
      bg_color: UIA_THEME.WARNING
    }
    this.successSettings = {
      bg_color: UIA_THEME.SUCCESS
    }
    this.dangerSettings = {
      bg_color: UIA_THEME.DANGER
    }
    this.infoSettings = {
      bg_color: UIA_THEME.INFO
    }
    this.lightSettings = {
      bg_color: UIA_THEME.LIGHT
    }
    this.darkSettings = {
      bg_color: UIA_THEME.DARK
    }
    this.primaryOutlineSettings = {
      bg_color: UIA_THEME.PRIMARY,
      isOutline: true
    }
    this.secondaryOutlineSettings = {
      bg_color: UIA_THEME.SECONDARY,
      isOutline: true
    }
    this.warningOutlineSettings = {
      bg_color: UIA_THEME.WARNING,
      isOutline: true
    }
    this.successOutlineSettings = {
      bg_color: UIA_THEME.SUCCESS,
      isOutline: true
    }
    this.dangerOutlineSettings = {
      bg_color: UIA_THEME.DANGER,
      isOutline: true
    }
    this.infoOutlineSettings = {
      bg_color: UIA_THEME.INFO,
      isOutline: true
    }
    this.lightOutlineSettings = {
      bg_color: UIA_THEME.LIGHT,
      isOutline: true
    }
    this.darkOutlineSettings = {
      bg_color: UIA_THEME.DARK,
      isOutline: true
    }
    this.smallPrimarySettings = {
      bg_color: UIA_THEME.PRIMARY,
      size: BUTTON_SIZE.SMALL
    }
    this.smallPrimaryOutlineSettings = {
      bg_color: UIA_THEME.PRIMARY,
      isOutline: true,
      size: BUTTON_SIZE.SMALL
    }
    this.largePrimarySettings = {
      bg_color: UIA_THEME.PRIMARY,
      size: BUTTON_SIZE.LARGE
    }
    this.largePrimaryOutlineSettings = {
      bg_color: UIA_THEME.PRIMARY,
      isOutline: true,
      size: BUTTON_SIZE.LARGE
    }
    this.settingsToggle = {
      bg_color: UIA_THEME.PRIMARY
    }

  }

}
