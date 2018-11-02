import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoMenusComponent } from './menus.component';

// Examples
import { DemoMenusBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoMenusComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoMenusComponent,
    DemoMenusBasic,
  ],
})
export class NglDemoMenusModule {}
