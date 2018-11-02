import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoPicklistComponent } from './picklist.component';

// Examples
import { DemoPicklistBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoPicklistComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoPicklistComponent,
    DemoPicklistBasic,
  ],
})
export class NglDemoPicklistModule {}
