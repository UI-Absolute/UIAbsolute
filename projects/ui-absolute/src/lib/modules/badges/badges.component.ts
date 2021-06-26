import { Component, Input, OnInit } from '@angular/core';
import { BadgesConfig, UIA_THEME, BADGES_SHAPE } from './../../../models';

@Component({
  selector: 'uia-badge',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  @Input() settings: BadgesConfig;
  @Input() value: any;

  badgeSettings = {
    bg_color: 'bg-primary',
    text_color: 'text-white',
    shape: ''
  };

  constructor() { }

  ngOnInit() {
    this.applySettings(this.settings);
  }

  applySettings(settings) {
    if (!settings) { return; }

    // For setting the background color of badge based on the settings recieved
    switch (settings.bg_color) {
      case UIA_THEME.SECONDARY:
        this.badgeSettings.bg_color = 'bg-secondary';
        break;
      case UIA_THEME.SUCCESS:
        this.badgeSettings.bg_color = 'bg-success';
        break;
      case UIA_THEME.DANGER:
        this.badgeSettings.bg_color = 'bg-danger';
        break;
      case UIA_THEME.WARNING:
        this.badgeSettings.bg_color = 'bg-warning';
        this.badgeSettings.text_color = 'text-dark';
        break;
      case UIA_THEME.INFO:
        this.badgeSettings.bg_color = 'bg-info';
        break;
      case UIA_THEME.LIGHT:
        this.badgeSettings.bg_color = 'bg-light';
        this.badgeSettings.text_color = 'text-dark';
        break;
      case UIA_THEME.DARK:
        this.badgeSettings.bg_color = 'bg-dark';
        break;
      default:
        this.badgeSettings.bg_color = 'bg-primary';
    }

    // For setting the shape of badge based on settings recieved
    switch (settings.shape) {
      case BADGES_SHAPE.ROUNDED:
        this.badgeSettings.shape = 'rounded-pill';
      default:
        this.badgeSettings.shape = '';
    }
  }

}
