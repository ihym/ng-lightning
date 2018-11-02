import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NglModule } from 'ng-lightning';



const routes: Routes = [
  { path: '', loadChildren: './intro/intro.module#NglDemoIntroModule', pathMatch: 'full' },
  { path: 'components', loadChildren: './components/components.module#NglDemoComponentsModule' },
  { path: 'support', loadChildren: './support/support.module#NglDemoSupportModule' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
    NglModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
