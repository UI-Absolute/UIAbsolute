import { Component, OnInit } from '@angular/core';
import { SpinnersConfig, SPINNERS_SIZE, SPINNERS_SPEED, UIA_THEME } from 'ui-absolute';
import { DEMO_CODE, PAGE_NAV } from './demo-spinners.constants';

@Component({
  selector: 'app-demo-spinners',
  templateUrl: './demo-spinners.component.html',
  styleUrls: ['./demo-spinners.component.scss']
})
export class DemoSpinnersComponent implements OnInit {

  settings: SpinnersConfig;
  secondarySettings: SpinnersConfig;
  warningSettings: SpinnersConfig;
  successSettings: SpinnersConfig;
  dangerSettings: SpinnersConfig;
  infoSettings: SpinnersConfig;
  lightSettings: SpinnersConfig;
  darkSettings: SpinnersConfig;
  buttonSpinnerSettings: SpinnersConfig;
  textSpinnerSettings: SpinnersConfig;
  slowSpinnerSettings: SpinnersConfig;
  fastSpinnerSettings: SpinnersConfig;
  pageNav;
  demoCode;

  constructor() { }

  ngOnInit() {
    this.pageNav = PAGE_NAV;

    this.demoCode = DEMO_CODE;

    this.settings = {
      color: UIA_THEME.PRIMARY,
      size: SPINNERS_SIZE.DEFAULT
    };
    this.secondarySettings = {
      color: UIA_THEME.SECONDARY,
      size: SPINNERS_SIZE.DEFAULT
    };
    this.warningSettings = {
      color: UIA_THEME.WARNING,
      size: SPINNERS_SIZE.DEFAULT
    };
    this.successSettings = {
      color: UIA_THEME.SUCCESS,
      size: SPINNERS_SIZE.DEFAULT
    };
    this.dangerSettings = {
      color: UIA_THEME.DANGER,
      size: SPINNERS_SIZE.DEFAULT
    };
    this.infoSettings = {
      color: UIA_THEME.INFO,
      size: SPINNERS_SIZE.DEFAULT
    };
    this.lightSettings = {
      color: UIA_THEME.LIGHT,
      size: SPINNERS_SIZE.DEFAULT
    };
    this.darkSettings = {
      color: UIA_THEME.DARK,
      size: SPINNERS_SIZE.DEFAULT
    };
    this.buttonSpinnerSettings = {
      color: UIA_THEME.LIGHT,
      size: SPINNERS_SIZE.SMALL
    };
    this.textSpinnerSettings = {
      color: UIA_THEME.PRIMARY,
      size: SPINNERS_SIZE.DEFAULT
    };
    this.slowSpinnerSettings = {
      color: UIA_THEME.PRIMARY,
      size: SPINNERS_SIZE.DEFAULT,
      speed: SPINNERS_SPEED.SLOW
    }
    this.fastSpinnerSettings = {
      color: UIA_THEME.PRIMARY,
      size: SPINNERS_SIZE.DEFAULT,
      speed: SPINNERS_SPEED.FAST
    }
  }

}
