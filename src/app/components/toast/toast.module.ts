import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoToastComponent } from './toast.component';

// Examples
import { DemoToastBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoToastComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoToastComponent,
    DemoToastBasic,
  ],
})
export class NglDemoToastModule {}
