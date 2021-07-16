import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnderConstructionComponent } from './common-layout/under-construction/under-construction.component';
import { DemoBadgesComponent } from './documentation/demo/demo-badges/demo-badges.component';
import { DemoButtonsComponent } from './documentation/demo/demo-buttons/demo-buttons.component';
import { DemoCheckboxComponent } from './documentation/demo/demo-checkbox/demo-checkbox.component';
import { DemoFileUploaderComponent } from './documentation/demo/demo-file-uploader/demo-file-uploader.component';
import { DemoRadioComponent } from './documentation/demo/demo-radio/demo-radio.component';
import { DemoSpinnersComponent } from './documentation/demo/demo-spinners/demo-spinners.component';
import { DemoSwitchesComponent } from './documentation/demo/demo-switches/demo-switches.component';
import { DemoTooltipComponent } from './documentation/demo/demo-tooltip/demo-tooltip.component';
import { DocumentationDetailsComponent } from './documentation/documentation-details/documentation-details.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { GettingStartedComponent } from './documentation/getting-started/getting-started.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'home', component: HomeComponent },
  {
     path: 'documentation',
     component: DocumentationComponent,
     children: [
      {
        path: 'getting-started',
        component: GettingStartedComponent
      },
      {
        path: '',
        component: DocumentationDetailsComponent
      },
      {
        path: 'file-uploader',
        component: DemoFileUploaderComponent
      },
      {
        path: 'underconstruction',
        component: UnderConstructionComponent
      },
      {
        path: 'badges',
        component: DemoBadgesComponent
      },
      {
        path: 'spinners',
        component: DemoSpinnersComponent
      },
      {
        path: 'switches',
        component: DemoSwitchesComponent
      },
      {
        path: 'buttons',
        component: DemoButtonsComponent
      },
      {
        path: 'tooltip',
        component: DemoTooltipComponent
      },
      {
        path: 'checkbox',
        component: DemoCheckboxComponent
      },
      {
        path: 'radio',
        component: DemoRadioComponent
      }
     ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
