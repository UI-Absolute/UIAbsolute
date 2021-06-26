import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchesComponent } from './switches.component';

@NgModule({
  declarations: [
    SwitchesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SwitchesComponent
  ]
})
export class UIASwitchesModule { }
