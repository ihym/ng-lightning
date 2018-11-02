import {Directive, Input, OnInit} from '@angular/core';
import {toBoolean} from '../util/util';
import {NglPill} from './pill';

@Directive({
  selector: '[nglPillRemove]',
})
export class NglPillRemove implements OnInit {

  @Input() set nglPillRemovable(removable: any) {
    this.pill.removable = toBoolean(removable);
    this.pill.detector.markForCheck();
  }

  constructor(private pill: NglPill) {}

  ngOnInit() {
    if (this.pill.removable === undefined) {
      this.pill.removable = true;
    }
  }
}
