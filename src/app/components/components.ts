import { Component, ChangeDetectionStrategy } from '@angular/core';
import { routes } from './routes';

@Component({
  templateUrl: './components.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsComponent {

  links = routes;

  getLabel(route) {
    const path = route.path;
    return path.charAt(0).toUpperCase() + path.slice(1);
  }
}
