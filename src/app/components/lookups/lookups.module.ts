import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoLookupsComponent } from './lookups.component';

// Examples
import { DemoLookupsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoLookupsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoLookupsComponent,
    DemoLookupsBasic,
  ],
})
export class NglDemoLookupsModule {}
