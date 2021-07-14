import { Component, Input, OnInit } from '@angular/core';
import { RadioConfig, RADIO_ALIGN, UIA_THEME } from '../../../models';

@Component({
  selector: 'uia-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  @Input() settings: RadioConfig;

  radioSettings = {
    color: '',
    align: ''
  };

  constructor() { }

  ngOnInit() {
    this.applySettings(this.settings);
  }

  applySettings(settings) {
    if (!settings) { return; }

    // For setting the color of radio based on the settings recieved
    switch (settings.color) {
      case UIA_THEME.SECONDARY:
        this.radioSettings.color = 'radio-secondary';
        break;
      case UIA_THEME.SUCCESS:
        this.radioSettings.color = 'radio-success';
        break;
      case UIA_THEME.DANGER:
        this.radioSettings.color = 'radio-danger';
        break;
      case UIA_THEME.WARNING:
        this.radioSettings.color = 'radio-warning';
        break;
      case UIA_THEME.INFO:
        this.radioSettings.color = 'radio-info';
        break;
      case UIA_THEME.LIGHT:
        this.radioSettings.color = 'radio-light';
        break;
      case UIA_THEME.DARK:
        this.radioSettings.color = 'radio-dark';
        break;
      default:
        this.radioSettings.color = 'radio-primary';
    }

    switch (settings.align) {
      case RADIO_ALIGN.HORIZONTAL:
        this.radioSettings.align = 'radio-inline';
        break;
      default:
        this.radioSettings.align = '';
    }
  }

}
