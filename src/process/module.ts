import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglPath} from './sales-path-coach/path';
import {NglPathItem} from './sales-path-coach/item';
import {NglPathItemVerbose, NglPathItemContent, NglPathItemTitle} from './sales-path-coach/item-verbose';
import {NglInternalOutletModule} from '../util/outlet.module';

const NGL_PATH_DIRECTIVES = [
  NglPath,
  NglPathItem,
  NglPathItemVerbose, NglPathItemContent, NglPathItemTitle,
];

const NGL_WIZARD_DIRECTIVES = [];

@NgModule({
  declarations: [...NGL_PATH_DIRECTIVES, ...NGL_WIZARD_DIRECTIVES],
  exports: [...NGL_PATH_DIRECTIVES, ...NGL_WIZARD_DIRECTIVES],
  imports: [CommonModule, NglInternalOutletModule],
})
export class NglProcessModule {}
