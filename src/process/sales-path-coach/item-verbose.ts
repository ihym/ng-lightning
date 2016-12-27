import {Directive, Input, TemplateRef, Output, EventEmitter, ContentChild} from '@angular/core';
import {NglPathItem} from './item';

/*
 * <ngl-tab [title]="..."]>
 *    <template ngl-tab-title>...</template>
 *    <template ngl-tab-content>
 *       Content goes here...
 *    </template>
 * </ngl-tab>
 */
@Directive({selector: 'template[ngl-path-item-title]'})
export class NglPathItemTitle {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({selector: 'template[ngl-path-item-content]'})
export class NglPathItemContent {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  selector: 'ngl-path-item',
  providers: [ {provide: NglPathItem, useExisting: NglPathItemVerbose} ],
})
export class NglPathItemVerbose extends NglPathItem {
  @Input('NglPathItemId') id: string;
  @Input() title: string | TemplateRef<any>;
  @Output() onActivate = new EventEmitter<NglPathItem>();
  @Output() onDeactivate = new EventEmitter<NglPathItem>();

  @ContentChild(NglPathItemContent) contentTemplate: NglPathItemContent;
  @ContentChild(NglPathItemTitle) titleTemplate: NglPathItemTitle;

  ngAfterContentInit() {
    if (this.titleTemplate) {
      this.title = this.titleTemplate.templateRef;
    }
    this.templateRef = this.contentTemplate.templateRef;
  }
}
