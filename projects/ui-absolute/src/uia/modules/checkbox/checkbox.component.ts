import { Component, Input, OnInit } from '@angular/core';
import { CheckboxConfig, CHECKBOX_ALIGN, UIA_THEME } from '../../../models';

@Component({
  selector: 'uia-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() settings: CheckboxConfig;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() id: string;
  @Input() name: string;
  @Input() for: string;

  checkboxSettings = {
    color: '',
    align: ''
  };

  constructor() { }

  ngOnInit() {
    this.applySettings(this.settings);
  }

  applySettings(settings) {
    if (!settings) { return; }

    // For setting the color of checkbox based on the settings recieved
    switch (settings.color) {
      case UIA_THEME.SECONDARY:
        this.checkboxSettings.color = 'checkbox-secondary';
        break;
      case UIA_THEME.SUCCESS:
        this.checkboxSettings.color = 'checkbox-success';
        break;
      case UIA_THEME.DANGER:
        this.checkboxSettings.color = 'checkbox-danger';
        break;
      case UIA_THEME.WARNING:
        this.checkboxSettings.color = 'checkbox-warning';
        break;
      case UIA_THEME.INFO:
        this.checkboxSettings.color = 'checkbox-info';
        break;
      case UIA_THEME.LIGHT:
        this.checkboxSettings.color = 'checkbox-light';
        break;
      case UIA_THEME.DARK:
        this.checkboxSettings.color = 'checkbox-dark';
        break;
      default:
        this.checkboxSettings.color = 'checkbox-primary';
    }

    switch (settings.align) {
      case CHECKBOX_ALIGN.VERTICAL:
        this.checkboxSettings.align = 'd-block';
        break;
      default:
        this.checkboxSettings.align = 'd-inline-block';
    }
  }

}
