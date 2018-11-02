import {Component} from '@angular/core';

@Component({
  selector: 'app-demo-images-basic',
  templateUrl: './basic.html',
})
export class DemoImagesBasic {

  ratio = '16-by-9';

  private ratios: string[] = ['', '16-by-9', '4-by-3', '1-by-1'];

  changeRatio() {
    this.ratio = this.ratios[(this.ratios.indexOf(this.ratio) + 1) % this.ratios.length];
  }

}
