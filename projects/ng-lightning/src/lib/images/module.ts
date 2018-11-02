import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NglFigure} from './figure';
import {NglFigureCrop} from './figure-crop';

@NgModule({
  declarations: [NglFigure, NglFigureCrop],
  exports: [NglFigure, NglFigureCrop],
  imports: [CommonModule],
})
export class NglImagesModule {}
