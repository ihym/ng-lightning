import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoDatepickersComponent } from './datepickers.component';

// Examples
import { DemoDatepickersBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoDatepickersComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoDatepickersComponent,
    DemoDatepickersBasic,
  ],
})
export class NglDemoDatepickersModule {}
