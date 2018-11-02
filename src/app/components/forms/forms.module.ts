import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoFormsComponent } from './forms.component';

// Examples
import { DemoFormsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoFormsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoFormsComponent,
    DemoFormsBasic,
  ],
})
export class NglDemoFormsModule {}
