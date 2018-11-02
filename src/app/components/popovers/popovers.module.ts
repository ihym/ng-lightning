import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoPopoversComponent } from './popovers.component';

// Examples
import { DemoPopoversBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoPopoversComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoPopoversComponent,
    DemoPopoversBasic,
  ],
})
export class NglDemoPopoversModule {}
