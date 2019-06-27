import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-comboboxes-footer',
  templateUrl: './footer.html',
})
export class DemoComboboxesFooter {
  options = ['One', 'Two', 'Three'];

  selection: string = null;

  open = false;
}
