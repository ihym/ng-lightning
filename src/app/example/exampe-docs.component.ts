import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-demo-example-docs',
  templateUrl: './exampe-docs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDocsComponent {

  selectedTab = 0;

  @Input() ts: TemplateRef<any>;

  @Input() markup: TemplateRef<any>;

}
