import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseDynamicIconComponent } from './base-dynamic-icon';

@Component({
  selector: 'ngl-dynamic-icon-eq',
  templateUrl: './eq.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglDynamicIconEq extends BaseDynamicIconComponent {
}
