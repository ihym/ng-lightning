import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NglModule } from 'ng-lightning';
import { NglDemoExampleModule } from 'src/app/example/example.module';

import { DemoSectionsComponent } from './sections.component';

// Examples
import { DemoSectionsBasic } from './examples/basic';

const routes: Routes = [
  { path: '', component: DemoSectionsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
    NglDemoExampleModule,
  ],
  declarations: [
    DemoSectionsComponent,
    DemoSectionsBasic,
  ],
})
export class NglDemoSectionsModule {}
