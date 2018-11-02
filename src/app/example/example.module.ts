import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NglModule } from 'ng-lightning';

import { ExampleDocsComponent } from './exampe-docs.component';


@NgModule({
  imports: [
    CommonModule,
    NglModule,
  ],
  declarations: [
    ExampleDocsComponent,
  ],
  exports: [
    ExampleDocsComponent,
  ]
})
export class NglDemoExampleModule {}
