import {Component} from '@angular/core';

@Component({
  selector: 'demo-picklist',
  templateUrl: './picklist.html',
})
export class DemoPicklist {
  open: boolean = false;
  multiple: boolean = true;
  category: string = 'category';
  pick: any = [];

  items = [
    { value: 'Item 1', category: 'Category 1' },
    { value: 'Item 2', category: 'Category 1' },
    { value: 'Item 3', category: 'Category 1' },
    { value: 'Item 4', category: 'Category 2' },
    { value: 'Item 5', category: 'Category 2' },
    { value: 'Item 6', category: 'Category 2' },
    { value: 'Item 7', category: 'Category 2' },
    { value: 'Item 8', category: 'Category 3' },
    { value: 'Item 9', category: 'Category 3' },
    { value: 'Item 10', category: 'Category 3' },
  ];

  get pickLabel() {
    if (this.multiple) {
      return this.pick && this.pick.length ? `${this.pick.length} options selected` : 'Select option(s)';
    } else {
      return this.pick.value || 'Select an option';
    }
  }

  toggleMultiple() {
    this.multiple = !this.multiple;
    this.pick = this.multiple ? [] : '';
  }
}
