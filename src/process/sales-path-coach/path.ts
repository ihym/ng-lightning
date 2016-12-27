import {Component, Input, QueryList, ContentChildren, Output, EventEmitter} from '@angular/core';
import {isInt} from '../../util/util';
import {NglPathItem} from './item';

@Component({
  selector: 'ngl-path',
  templateUrl: './path.pug',
})
export class NglPath {
  @ContentChildren(NglPathItem) items: QueryList<NglPathItem>;

  activeItem: NglPathItem;
  selected: string | number | NglPathItem;
  current: string | number | NglPathItem;

  @Input('selected') set setSelected(selected: string | number | NglPathItem) {
    if (selected === this.selected) return;

    this.selected = selected;

    if (!this.items) return; // Wait for content to initialize

    this.activate();
  }

  @Input('current') set setCurrent(current: string | number | NglPathItem) {
    if (current === this.current) return;

    this.current = current;

    if (!this.items) return; // Wait for content to initialize

    this.activate();
  }

  @Output() selectedChange = new EventEmitter<NglPathItem>();

  ngAfterContentInit() {
    // Initial selection after all items are created
    this.activate();
    if (!this.activeItem) {
      setTimeout(() => this.select(this.items.first));
    }
  }

  select(tab: NglPathItem) {
    this.selectedChange.emit(tab);
  }

  move(evt: Event, moves: number) {
    evt.preventDefault();

    const items = this.items.toArray();
    const selectedIndex = items.indexOf( this.activeItem );
    this.select( items[(items.length + selectedIndex + moves) % items.length] );
  }

  private activate() {
    this.activeItem = this.findTab();
    this.items.forEach((t: NglPathItem) => t.active = (t === this.activeItem));
  }

  private findTab(value: any = this.selected): NglPathItem {
    if (value instanceof NglPathItem) {
      return value;
    }
    if (isInt(value)) {
      return this.items.toArray()[+value];
    }
    return this.items.toArray().find((t: NglPathItem) => {
      return t.id && t.id === value;
    });
  }
}
