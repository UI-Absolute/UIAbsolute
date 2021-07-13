import { Component, Input, OnInit } from '@angular/core';
import { ButtonsConfig, BUTTON_SIZE, UIA_THEME } from './../../../models';

@Component({
  selector: 'lib-uia-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() settings: ButtonsConfig;
  @Input() value: any;

  buttonSettings = {
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
        this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-secondary' : 'btn-secondary';
        this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      case UIA_THEME.SUCCESS:
        this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-success' : 'btn-success';
        this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      case UIA_THEME.DANGER:
        this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-danger' : 'btn-danger';
        this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      case UIA_THEME.WARNING:
        this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-warning' : 'btn-warning';
        this.buttonSettings.text_color = settings.isOutline ? '' : 'text-dark';
        break;
      case UIA_THEME.INFO:
        this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-info' : 'btn-info';
        this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      case UIA_THEME.LIGHT:
        this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-light' : 'btn-light';
        this.buttonSettings.text_color = settings.isOutline ? '' : 'text-dark';
        break;
      case UIA_THEME.DARK:
        this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-dark' : 'btn-dark';
        this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
        break;
      default:
        this.buttonSettings.bg_color = settings.isOutline ? 'btn-outline-primary' : 'btn-primary';
        this.buttonSettings.text_color = settings.isOutline ? '' : 'text-white';
    }

    this.buttonSettings.size = (settings.size === BUTTON_SIZE.LARGE) ? 'btn-lg'
                                : (settings.size === BUTTON_SIZE.SMALL) ? 'btn-sm'
                                : '';
  }

}
