import { Component, Input, OnInit } from '@angular/core';
import { SwitchesConfig, SWITCHES_SIZE, UIA_THEME } from '../../../models';

@Component({
  selector: 'uia-switch',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {

  @Input() settings: SwitchesConfig;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  index: number | string;

  switchSettings = {
    color: 'switch-success',
    size: ''
  };

  constructor() { }

  ngOnInit() {
    this.applySettings(this.settings);
  }

  applySettings(settings) {
    if (!settings) { return; }

    switch (settings.color) {
      case UIA_THEME.SECONDARY:
        this.switchSettings.color = 'switch-secondary';
        break;
      case UIA_THEME.SUCCESS:
        this.switchSettings.color = 'switch-success';
        break;
      case UIA_THEME.DANGER:
        this.switchSettings.color = 'switch-danger';
        break;
      case UIA_THEME.WARNING:
        this.switchSettings.color = 'switch-warning';
        break;
      case UIA_THEME.INFO:
        this.switchSettings.color = 'switch-info';
        break;
      case UIA_THEME.LIGHT:
        this.switchSettings.color = 'switch-light';
        break;
      case UIA_THEME.DARK:
        this.switchSettings.color = 'switch-dark';
        break;
      default:
        this.switchSettings.color = 'switch-primary';
    }
    switch (settings.size) {
      case SWITCHES_SIZE.LARGE:
        this.switchSettings.size = '';
        break;
        default:
          this.switchSettings.size = 'switch-sm';
    }
    this.index = settings.id ? settings.id : ''
  }

}
