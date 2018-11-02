import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoImagesComponent } from './images.component';

// Examples
import { DemoImagesBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoImagesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoImagesComponent,
    DemoImagesBasic,
  ],
})
export class NglDemoImagesModule {}
