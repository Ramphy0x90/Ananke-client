import { Component } from '@angular/core';
import { Option } from 'src/app/models/nav-bar/option';
import { User } from 'src/app/models/user/user';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserService } from 'src/app/services/user.service';

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
      name: 'Add ticket',
      icon: 'bi bi-plus-lg',
      route: 'tickets/create',
      access: 3
    },
    {
      name: 'Delete ticket',
      icon: 'bi bi-trash3',
      route: 'tickets',
      access: 3
    }
  ];


  currentView: string = "";
  currentUser!: User;

  constructor(private navigationService: NavigationService, private userService: UserService) {
    this.navigationService.currentView.subscribe({
      next: (view: string) => {
        this.currentView = view;
      }
    });

    let checkUser = this.userService.getLoggedUser();
    if(checkUser != null) {
      this.currentUser = checkUser;
    }
  }

  /**
   * Update current view with navigation service
   * @param view 
   */
  navigate(view: string): void {
    this.navigationService.setCurrentView(view);
  }
}
