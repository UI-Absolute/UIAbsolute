import { Component, Input, OnInit } from '@angular/core';
import { ButtonsToggleConfig, BUTTON_SIZE, UIA_THEME } from './../../../../models';

@Component({
  selector: 'lib-uia-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

  @Input() settings: ButtonsToggleConfig;
  @Input() value: any;
  @Input() checked: boolean;

  buttonToggleSettings = {
    bg_color: 'btn-primary',
    text_color: '',
    size: '',
    isOutline: false
  };

  constructor() { }

  ngOnInit() {
    this.applySettings(this.settings);
  }

  applySettings(settings) {
    if (!settings) { return; }

    switch (settings.bg_color) {
      case UIA_THEME.SECONDARY:
        this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-secondary' : 'btn-secondary';
        this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      case UIA_THEME.SUCCESS:
        this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-success' : 'btn-success';
        this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      case UIA_THEME.DANGER:
        this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-danger' : 'btn-danger';
        this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      case UIA_THEME.WARNING:
        this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-warning' : 'btn-warning';
        this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-dark';
        break;
      case UIA_THEME.INFO:
        this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-info' : 'btn-info';
        this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      case UIA_THEME.LIGHT:
        this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-light' : 'btn-light';
        this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-dark';
        break;
      case UIA_THEME.DARK:
        this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-dark' : 'btn-dark';
        this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      default:
        this.buttonToggleSettings.bg_color = settings.isOutline ? 'btn-outline-primary' : 'btn-primary';
        this.buttonToggleSettings.text_color = settings.isOutline ? '' : 'text-white';
    }

    this.buttonToggleSettings.size = (settings.size === BUTTON_SIZE.LARGE) ? 'btn-lg'
                                : (settings.size === BUTTON_SIZE.SMALL) ? 'btn-sm'
                                : '';
  }

}
