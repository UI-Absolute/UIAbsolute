import { Component, Input, OnInit } from '@angular/core';
import { SpinnersConfig, UIA_THEME, SPINNERS_SIZE, SPINNERS_SPEED } from '../../../models';

@Component({
  selector: 'uia-spinner',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.scss']
})
export class SpinnersComponent implements OnInit {

  @Input() settings: SpinnersConfig;
  @Input() loadingText: string;

  spinnerSettings = {
    color: 'text-success',
    size: '',
    speed: '0.75s'
  };

  constructor() { }

  ngOnInit() {
    this.applySettings(this.settings);
  }

  applySettings(settings) {
    if (!settings) { return; }

    // For setting the background color of badge based on the settings recieved
    switch (settings.color) {
      case UIA_THEME.SECONDARY:
        this.spinnerSettings.color = 'text-secondary';
        break;
      case UIA_THEME.SUCCESS:
        this.spinnerSettings.color = 'text-success';
        break;
      case UIA_THEME.DANGER:
        this.spinnerSettings.color = 'text-danger';
        break;
      case UIA_THEME.WARNING:
        this.spinnerSettings.color = 'text-warning';
        break;
      case UIA_THEME.INFO:
        this.spinnerSettings.color = 'text-info';
        break;
      case UIA_THEME.LIGHT:
        this.spinnerSettings.color = 'text-light';
        break;
      case UIA_THEME.DARK:
        this.spinnerSettings.color = 'text-dark';
        break;
      default:
        this.spinnerSettings.color = 'text-primary';
    }
    switch (settings.size) {
      case SPINNERS_SIZE.SMALL:
        this.spinnerSettings.size = 'spinner-border-sm';
        break;
      case SPINNERS_SIZE.LARGE:
        this.spinnerSettings.size = 'spinner-border-lg';
        break;
      default:
        this.spinnerSettings.size = '';
    }
    switch (settings.speed) {
      case SPINNERS_SPEED.SLOW:
        this.spinnerSettings.speed = '2s';
        break;
      case SPINNERS_SPEED.FAST:
        this.spinnerSettings.speed = '0.25s';
        break;
      default:
        this.spinnerSettings.speed = '0.75s';
    }
  }

}
