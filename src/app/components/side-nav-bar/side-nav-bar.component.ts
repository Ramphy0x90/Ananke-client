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
      route: 'dashboard',
      access: 3
    },
    {
      name: 'Recent tickets',
      route: 'tickets',
      access: 3
    },
    {
      name: 'My tickets',
      route: 'tickets',
      access: 3
    },
    {
      name: 'Closed tickets',
      route: 'tickets',
      access: 3
    },
    {
      name: 'Create view',
      route: 'create-view',
      access: 3
    }
  ];
}
