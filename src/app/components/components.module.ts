import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes as demoRoutes } from './routes';

import { NglModule } from 'ng-lightning';

import { ComponentsComponent } from './components';


const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: demoRoutes,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NglModule,
  ],
  declarations: [
    ComponentsComponent,
  ],
})
export class NglDemoComponentsModule {}
