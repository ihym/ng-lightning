import {Component, Input, TemplateRef, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[nglInternalOutlet]',
  template: `{{content}}<ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>`,
})
export class NglInternalOutlet implements OnChanges {
  @Input() nglInternalOutlet: string | TemplateRef<any>;

  content: string;
  contentTemplate: TemplateRef<any>;

  ngOnChanges(changes?: SimpleChanges) {
    [this.content, this.contentTemplate] = this.nglInternalOutlet instanceof TemplateRef
                                            ? ['', <TemplateRef<any>>this.nglInternalOutlet]
                                            : [<string>this.nglInternalOutlet, null];
  }
}
