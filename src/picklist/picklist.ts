import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ContentChild, ViewChild, ElementRef, Renderer} from '@angular/core';
import 'rxjs/add/operator/filter';
import {NglPicklistItemTemplate} from './item';
import {NglPick} from '../pick/pick';
import {toBoolean} from '../util/util';

@Component({
  selector: 'ngl-picklist[nglPick]',
  templateUrl: './picklist.pug',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    li.slds-is-active {
      background-color: #F4F6F9;
    }`,
  ],
})
export class NglPicklist {

  filteredData: any[];
  groupedData: any[];

  @Input() category: string;

  @Input() set data(data: any[]) {
    this._data = data;
    this.filterData();
  }
  get data() {
    return this._data;
  }

  @Input() set fluid(fluid: boolean | string) {
    this._fluid = toBoolean(fluid);
  }
  get fluid() {
    return this._fluid;
  }

  @Input() set disabled(disabled: boolean | string) {
    this._disabled = toBoolean(disabled);
  }
  get disabled() {
    return this._disabled;
  }

  @Input() dropdownListClass: any;
  @Input() dropdownClass: any;

  @Input('filter') filterType: string | Function;
  @Input() filterPlaceholder: string = '';

  @Input() set open(value: boolean) {
    this._open = value;
    if (this.open && this.hasFilter) {
      setTimeout(() => this.focusFilter());
    }
  }
  get open() {
    return this._open;
  }
  @Output() openChange = new EventEmitter();

  @ContentChild(NglPicklistItemTemplate) itemTemplate: NglPicklistItemTemplate;

  @ViewChild('filterInput') filterInput: ElementRef;

  get hasFilter() {
    return typeof(this.filterType) !== 'undefined';
  }

  private _data: any[];
  private _open = false;
  private _changeSubscription: any;
  private _disabled = false;
  private _fluid = false;
  private filter = '';
  private filterActiveIndex: number = 0;
  private hasFilterFocus: boolean = false;

  constructor(private pick: NglPick, private renderer: Renderer) {}

  ngAfterContentInit() {
    this._changeSubscription = this.pick.nglPickChange.filter(() => !this.pick.isMultiple)
                                .subscribe(() => this.openChange.emit(false));
  }

  ngOnDestroy() {
    if (this._changeSubscription) {
      this._changeSubscription.unsubscribe();
      this._changeSubscription = null;
    }
  }

  filterData() {
    this.filteredData = this._filterData();
    this.groupedData = this.groupBy(this.filteredData, this.category);
    this.setFilterActive(); // Keep active index in bounds
  }

  _filterData() {
    if (!this.data || !this.hasFilter || !this.filter) {
      return this.data;
    }
    const filter = <any>this.filterType;
    switch (typeof(filter)) {
      case 'string':
        return this.data.filter(d => (filter ? d[filter] : d.toString()).toLowerCase().indexOf(this.filter.toLowerCase()) !== -1);
      case 'function':
        return this.data.filter(filter);
      default:
        throw new Error(`Invalid NglPicklist filter type (${typeof(this.filterType)}). The filter must be empty, a field name or a filter function.`);
    }
  }

  isOptionActive(optionIndex, groupIndex) {
    return this.hasFilter && this.filterActiveIndex === this.getIndex(optionIndex, groupIndex);
  }

  onOptionHover(optionIndex, groupIndex) {
    if (!this.hasFilterFocus) return;
    this.filterActiveIndex = this.getIndex(optionIndex, groupIndex);
  }

  filterChange(filter: string) {
    this.filter = filter;
    this.filterData();
  }

  setFilterActive(moves: number = 0, evt?: Event) {
    if (evt) {
      evt.preventDefault();
      evt.stopPropagation();
    }

    this.filterActiveIndex = Math.max(Math.min(this.filterActiveIndex + moves, this.filteredData.length - 1), 0);
  }

  onFilterPick() {
    if (!this.filteredData.length || this.filterActiveIndex < 0) return;
    this.pick.selectOption(this.filteredData[this.filterActiveIndex]);
  }

  focusFilter() {
    this.renderer.invokeElementMethod(this.filterInput.nativeElement, 'focus', []);
  }

  onFilterFocus() {
    this.filterActiveIndex = 0;
    this.hasFilterFocus = true;
  }

  onFilterBlur() {
    this.filterActiveIndex = -1;
    this.hasFilterFocus = false;
  }

  private getIndex(optionIndex, groupIndex) {
    return optionIndex + (groupIndex > 0 ? this.groupedData[groupIndex - 1].options.length : 0);
  }

  private groupBy(data: any[], category: string) {
    if (!category) {
      return [
        {
          category: '',
          options: data,
        },
      ];
    }

    const categories = {};
    for (let i = 0; i < data.length; i++) {
      const categoryName = data[i][category] || '';
      if (!categories[categoryName]) {
        categories[categoryName] = [];
      }
      categories[categoryName].push(data[i]);
    }

    const groupedData = [];
    for (let categoryName in categories) {
      groupedData.push({category: categoryName, options: categories[categoryName]});
    }
    return groupedData;
  }

}
