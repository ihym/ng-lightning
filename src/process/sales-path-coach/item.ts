import {Directive, Input, TemplateRef, Output, EventEmitter, Optional} from '@angular/core';

/*
 * <template ngl-path-item title="...">
 *    Content goes here...
 * </template>
 */
@Directive({
  selector: 'template[ngl-path-item]',
  exportAs: 'nglPathItem',
})
export class NglPathItem {
  @Input('nglPathItemId') id: string;
  @Input() title: string | TemplateRef<any>;
  @Output() onActivate = new EventEmitter<NglPathItem>();
  @Output() onDeactivate = new EventEmitter<NglPathItem>();
  @Output() onSelect = new EventEmitter<NglPathItem>();
  @Output() onDeselect = new EventEmitter<NglPathItem>();
  @Output() onComplete = new EventEmitter<NglPathItem>();
  @Output() onIncomplete = new EventEmitter<NglPathItem>();

  private _active: boolean = false;
  private _selected: boolean = false;
  private _completed: boolean = false;

  constructor(@Optional() public templateRef: TemplateRef<any>) {}

  set active(active: boolean) {
    if (active === this._active) return;
    this._active = active;
    active ? this.onActivate.emit(this) : this.onDeactivate.emit(this);
  }

  set selected(selected: boolean) {
    if (selected === this._selected) return;
    this._selected = selected;
    selected ? this.onSelect.emit(this) : this.onDeselect.emit(this);
  }

  set completed(completed: boolean) {
    if (completed === this._completed) return;
    this._completed = completed;
    completed ? this.onComplete.emit(this) : this.onIncomplete.emit(this);
  }

  get active(): boolean {
    return this._active;
  }

  get selected(): boolean {
    return this._active;
  }

  get completed(): boolean {
    return this._active;
  }
}
