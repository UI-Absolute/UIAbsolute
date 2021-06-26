import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';

@NgModule({
  declarations: [
    ButtonsComponent,
    ButtonToggleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonsComponent,
    ButtonToggleComponent
  ]
})
export class UIAButtonsModule { }
