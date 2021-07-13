import { Component, OnInit } from '@angular/core';
import { BadgesConfig, BADGES_SHAPE, UIA_THEME } from 'ui-absolute';

// import { BadgesConfig, BADGES_SHAPE, UIA_THEME } from 'ui-absolute';
import { DEMO_CODE, PAGE_NAV } from './demo-badges.constants';

@Component({
  selector: 'app-demo-badges',
  templateUrl: './demo-badges.component.html',
  styleUrls: ['./demo-badges.component.scss']
})
export class DemoBadgesComponent implements OnInit {

  settings: BadgesConfig;
  notificationSettings: BadgesConfig;
  secondarySettings: BadgesConfig;
  warningSettings: BadgesConfig;
  successSettings: BadgesConfig;
  dangerSettings: BadgesConfig;
  infoSettings: BadgesConfig;
  lightSettings: BadgesConfig;
  darkSettings: BadgesConfig;
  primaryPill: BadgesConfig;
  secondaryPill: BadgesConfig;
  warningPill: BadgesConfig;
  successPill: BadgesConfig;
  dangerPill: BadgesConfig;
  infoPill: BadgesConfig;
  lightPill: BadgesConfig;
  darkPill: BadgesConfig;
  pageNav;
  demoCode;

  constructor() { }

  ngOnInit() {
    this.pageNav = PAGE_NAV;

    this.demoCode = DEMO_CODE;

    this.settings = {
      bg_color: UIA_THEME.PRIMARY,
      shape: BADGES_SHAPE.DEFAULT
    };
    this.notificationSettings = {
      bg_color: UIA_THEME.LIGHT,
      shape: BADGES_SHAPE.ROUNDED
    };
    this.secondarySettings = {
      bg_color: UIA_THEME.SECONDARY,
      shape: BADGES_SHAPE.DEFAULT
    };
    this.warningSettings = {
      bg_color: UIA_THEME.WARNING,
      shape: BADGES_SHAPE.DEFAULT
    };
    this.successSettings = {
      bg_color: UIA_THEME.SUCCESS,
      shape: BADGES_SHAPE.DEFAULT
    };
    this.dangerSettings = {
      bg_color: UIA_THEME.DANGER,
      shape: BADGES_SHAPE.DEFAULT
    };
    this.infoSettings = {
      bg_color: UIA_THEME.INFO,
      shape: BADGES_SHAPE.DEFAULT
    };
    this.lightSettings = {
      bg_color: UIA_THEME.LIGHT,
      shape: BADGES_SHAPE.DEFAULT
    };
    this.darkSettings = {
      bg_color: UIA_THEME.DARK,
      shape: BADGES_SHAPE.DEFAULT
    };
    this.primaryPill = {
      bg_color: UIA_THEME.PRIMARY,
      shape: BADGES_SHAPE.ROUNDED
    };
    this.secondaryPill = {
      bg_color: UIA_THEME.SECONDARY,
      shape: BADGES_SHAPE.ROUNDED
    };
    this.warningPill = {
      bg_color: UIA_THEME.WARNING,
      shape: BADGES_SHAPE.ROUNDED
    };
    this.successPill = {
      bg_color: UIA_THEME.SUCCESS,
      shape: BADGES_SHAPE.ROUNDED
    };
    this.dangerPill = {
      bg_color: UIA_THEME.DANGER,
      shape: BADGES_SHAPE.ROUNDED
    };
    this.infoPill = {
      bg_color: UIA_THEME.INFO,
      shape: BADGES_SHAPE.ROUNDED
    };
    this.lightPill = {
      bg_color: UIA_THEME.LIGHT,
      shape: BADGES_SHAPE.ROUNDED
    };
    this.darkPill = {
      bg_color: UIA_THEME.DARK,
      shape: BADGES_SHAPE.ROUNDED
    };
  }

}
