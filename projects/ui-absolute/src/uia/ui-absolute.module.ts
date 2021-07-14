import { NgModule } from '@angular/core';
import { UIABadgesModule } from './modules/badges/badges.module';
import { UiAbsoluteComponent } from './ui-absolute.component';

@NgModule({
  declarations: [UiAbsoluteComponent],
  imports: [
    UIABadgesModule
  ],
  exports: [UiAbsoluteComponent]
})
export class UiAbsoluteModule { }
