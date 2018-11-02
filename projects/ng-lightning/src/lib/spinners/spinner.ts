import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngl-spinner',
  templateUrl: './spinner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglSpinner {

  /**
   * The size of the spinner.
   */
  @Input() set size(size: 'xx-small' | 'x-small' |  'small' | 'medium' | 'large') {
    this.toggleHostClass(false, this.size);
    this._size = size;
    this.toggleHostClass(true, this.size);
  }
  get size() {
    return this._size || 'medium';
  }

  /**
   * The variant changes the appearance of the spinner.
   */
  @Input() set variant(variant: 'brand' | 'inverse') {
    this.toggleHostClass(false, this.variant);
    this._variant = variant;
    this.toggleHostClass(true, this.variant);
  }
  get variant() {
    return this._variant;
  }

  /**
   * The alternative text used to describe the reason for the wait and need for a spinner.
   */
  @Input() alternativeText: 'brand' | 'inverse';

  private _size: 'xx-small' | 'x-small' |  'small' | 'medium' | 'large';
  private _variant: 'brand' |  'inverse';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.element.nativeElement, 'slds-spinner');
    this.renderer.addClass(this.element.nativeElement, `slds-spinner_${this.size}`);
    this.renderer.setAttribute(this.element.nativeElement, 'role', 'status');
  }

  private toggleHostClass(isAdd: boolean, klass: string) {
    if (!klass) { return; }

    const el = this.element.nativeElement;
    this.renderer[isAdd ? 'addClass' : 'removeClass'](el, `slds-spinner_${klass}`);
  }
}
