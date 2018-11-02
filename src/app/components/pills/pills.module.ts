import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoPillsComponent } from './pills.component';

// Examples
import { DemoPillsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoPillsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoPillsComponent,
    DemoPillsBasic,
  ],
})
export class NglDemoPillsModule {}
