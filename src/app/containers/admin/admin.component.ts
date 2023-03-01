import { Component } from '@angular/core';
import { Option } from 'src/app/models/nav-bar/option';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  options: Option[] = [
    {
      id: 'SNB:manage_users',
      name: 'Manage users',
      icon: 'bi bi-person-gear',
      route: 'admin',
      access: 4
    },
    {
      id: 'SNB:manage_tickets_attributes',
      name: 'Manage tickets attributes',
      icon: 'bi bi-card-checklist',
      route: 'admin',
      access: 4
    }
  ];
}
