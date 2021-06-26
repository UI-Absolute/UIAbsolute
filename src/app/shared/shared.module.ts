import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from './search-filter.pipe';
import { PageNavComponent } from './page-nav/page-nav.component';
import { RouterModule } from '@angular/router';
import { DemoCodeComponent } from './demo-code/demo-code.component';

@NgModule({
  declarations: [
    SearchFilterPipe,
    PageNavComponent,
    DemoCodeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SearchFilterPipe,
    PageNavComponent,
    DemoCodeComponent
  ]
})
export class SharedModule { }
