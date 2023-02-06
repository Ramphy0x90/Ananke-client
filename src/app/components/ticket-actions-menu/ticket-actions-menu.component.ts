import { Component } from '@angular/core';
import { Option } from 'src/app/models/nav-bar/option';
import { User } from 'src/app/models/user/user';
import { Event } from 'src/app/models/events-service/event';
import { EventsService } from 'src/app/services/events.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-actions-menu',
  templateUrl: './ticket-actions-menu.component.html',
  styleUrls: ['./ticket-actions-menu.component.css']
})
export class TicketActionsMenuComponent {
  /**
   * 1 = ONLY-UNLOGGED
   * 2 = ALL 
   * 3 = LOGGED
   * 4 = ONLY-ADMIN
   */
  menuActions: Option[] = [
    {
      id: 'TA:add_ticket',
      name: 'Add ticket',
      icon: 'bi bi-plus-lg',
      route: 'tickets/create',
      access: 3
    },
    {
      id: 'TA:edit_ticket',
      name: 'Edit ticket',
      icon: 'bi bi-pencil-square',
      route: 'tickets/edit',
      access: 3
    },
    {
      id: 'TA:delete_ticket',
      name: 'Delete ticket',
      icon: 'bi bi-trash3',
      route: 'tickets',
      access: 3
    }
  ];

  currentView: string = "";
  currentUser!: User;
  currentEvent!: Event;

  constructor(private navigationService: NavigationService,
    private router: Router,
    private userService: UserService,
    private eventService: EventsService) {
    this.navigationService.currentView.subscribe({
      next: (view: string) => {
        this.currentView = view;
      }
    });

    this.eventService.event.subscribe({
      next: (event: Event) => {
        this.currentEvent = event;
      }
    });

    let checkUser = this.userService.getLoggedUser();
    if(checkUser != null) {
      this.currentUser = checkUser;
    }
  }

  show(option: Option): boolean {
    switch(option.name) {
      case 'Add ticket':
        if(this.router.url != '/app/tickets/create'
        && this.currentView != 'TA:edit_ticket') {
          return true;
        }
        break;
      case 'Edit ticket':
        if(this.currentEvent
          && this.currentEvent.id == 'tickets-table'
          && this.currentEvent.data.length == 1
          && this.currentView != 'TA:edit_ticket') {
          return true;
        }
        break;
      case 'Delete ticket':
        if((this.currentEvent
          && this.currentEvent.id == 'tickets-table'
          && this.currentEvent.data.length > 1)
          || this.currentView == 'TA:edit_ticket') {
          return true;
        }
        break;
    }

    return false;
  }

  /**
   * Update current view with navigation service
   * @param view 
   */
  notifyChangeView(viewId: String): void {
    this.navigationService.setCurrentView(viewId.toString());
  }
}
