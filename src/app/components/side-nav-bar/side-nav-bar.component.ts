import { Component } from '@angular/core';
import { Option } from 'src/app/models/nav-bar/option';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent {
  /**
   * 1 = ONLY-UNLOGGED
   * 2 = ALL 
   * 3 = LOGGED
   * 4 = ONLY-ADMIN
   */
  navBarOptions: Option[] = [
    {
      name: 'Dashboard',
      icon: 'bi bi-speedometer',
      route: 'dashboard',
      access: 3
    },
    {
      name: 'My tickets',
      icon: 'bi bi-ui-checks',
      route: 'tickets',
      access: 3
    },
    {
      name: 'Recent tickets',
      icon: 'bi bi-clock',
      route: 'tickets',
      access: 3
    },
    {
      name: 'Closed tickets',
      icon: 'bi bi-check-circle',
      route: 'tickets',
      access: 3
    },
    {
      name: 'separator',
      icon: '',
      route: '',
      access: 3
    },
    {
      name: 'Create view',
      icon: 'bi bi-window-plus',
      route: 'create-view',
      access: 3
    }
  ];
}
