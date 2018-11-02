# `<ngl-tabset>`

### Input

  * `selected: string | number | NglTab`: The tab to activate. This can be either the `index` number, the tab's id *(id="myid")* or the actual `NglTab` instance.
  * `variant?: 'default' | 'scoped' = 'default'`: Whether the tabset is [scoped](https://www.lightningdesignsystem.com/components/tabs#scoped) or not.

### Output

  * `selectedChange: EventEmitter<NglTab>`: the tab clicked in order to activate


# `<ng-template ngl-tab>` | `<ngl-tab>`

### Input

  * `label: string = ''`: Header text.
  * `id?: string`: Tab's ID in case you want to preselect or programmatically manipulate it.

### Output

  * `activate: EventEmitter<NglTab>`: called when tab becomes active.
  * `deactivate: EventEmitter<NglTab>`: called when tab becomes inactive.

### Only when using `<ngl-tab>`

  * `<ng-template ngl-tab-label>`: contains header's content
  * `<ng-template ngl-tab-content>`: contains tabs's content
