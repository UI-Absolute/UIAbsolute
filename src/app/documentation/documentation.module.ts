import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { DocumentationComponent } from './documentation.component';
import { CommonLayoutModule } from '../common-layout/common-layout.module';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { DocumentationDetailsComponent } from './documentation-details/documentation-details.component';
import { DemoFileUploaderComponent } from './demo/demo-file-uploader/demo-file-uploader.component';
import { DemoBadgesComponent } from './demo/demo-badges/demo-badges.component';
import { DemoSpinnersComponent } from './demo/demo-spinners/demo-spinners.component';
import { DemoSwitchesComponent } from './demo/demo-switches/demo-switches.component';
import { DemoButtonsComponent } from './demo/demo-buttons/demo-buttons.component';
import { DemoTooltipComponent } from './demo/demo-tooltip/demo-tooltip.component';
import { DemoCheckboxComponent } from './demo/demo-checkbox/demo-checkbox.component';
import { DemoRadioComponent } from './demo/demo-radio/demo-radio.component';
import { DemoBreadcrumbsComponent } from './demo/demo-breadcrumbs/demo-breadcrumbs.component';
import { SharedModule } from '../shared/shared.module';
import {
  UIABadgesModule,
  UIASpinnersModule,
  UIASwitchesModule,
  UIAButtonsModule,
  UIATooltipModule,
  UIACheckboxModule,
  UIARadioModule,
  UIABreadcrumbsModule,
 } from 'projects/ui-absolute/src/public-api';

@NgModule({
  declarations: [
    SidePanelComponent,
    DocumentationComponent,
    GettingStartedComponent,
    DocumentationDetailsComponent,
    DemoFileUploaderComponent,
    DemoBadgesComponent,
    DemoSpinnersComponent,
    DemoSwitchesComponent,
    DemoButtonsComponent,
    DemoTooltipComponent,
    DemoCheckboxComponent,
    DemoRadioComponent,
    DemoBreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonLayoutModule,
    RouterModule,
    SharedModule,
    UIABadgesModule,
    UIASpinnersModule,
    UIASwitchesModule,
    UIAButtonsModule,
    UIATooltipModule,
    UIACheckboxModule,
    UIARadioModule,
    UIABreadcrumbsModule
  ],
  exports: [
    SidePanelComponent
  ]
})
export class DocumentationModule { }
