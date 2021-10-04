import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiAbsoluteComponent } from './ui-absolute.component';

@NgModule({
  declarations: [UiAbsoluteComponent],
  imports: [
    CommonModule
  ],
  exports: [UiAbsoluteComponent]
})
export class UiAbsoluteModule { }
