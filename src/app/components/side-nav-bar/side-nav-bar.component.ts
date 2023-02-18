import { Component } from '@angular/core';
import { Option } from 'src/app/models/nav-bar/option';
import { NavigationService } from 'src/app/services/navigation.service';

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
      id: 'SNB:dashboard',
      name: 'Dashboard',
      icon: 'bi bi-speedometer',
      route: 'dashboard',
      access: 3
    },
    {
      id: 'SNB:my_tickets',
      name: 'My tickets',
      icon: 'bi bi-ui-checks',
      route: 'tickets',
      access: 3
    },
    {
      id: 'SNB:recent_tickets',
      name: 'Recent tickets',
      icon: 'bi bi-clock',
      route: 'tickets/all',
      access: 3
    },
    {
      id: 'SNB:closed_tickets',
      name: 'Closed tickets',
      icon: 'bi bi-check-circle',
      route: 'tickets/closed',
      access: 3
    },
    {
      id: 'SNB:separator',
      name: 'separator',
      icon: '',
      route: '',
      access: 3
    },
    {
      id: 'SNB:create_view',
      name: 'Create view',
      icon: 'bi bi-window-plus',
      route: 'create-view',
      access: 3
    }
  ];

  currentPage: string = "";
  sideMenuOpen: boolean = true;

  constructor(private navigationService: NavigationService) {
    this.navigationService.currentPage.subscribe({
      next: (page: string) => {
        this.currentPage = page;
      }
    });
  }

  /**
   * Update current page with navigation service
   * @param page 
   */
  nvaigate(page: String): void {
    this.navigationService.setCurrentPage(page.toString());
  }

  changeSideMenuStatus(): void {
    let sideMenuContainer: HTMLElement | null = document.querySelector(".side-nav-bar-main-container");
    let sideMenuOptions: NodeListOf<HTMLElement> = document.querySelectorAll('.side-navbar-option span');
    this.sideMenuOpen = !this.sideMenuOpen;

    sideMenuOptions.forEach((option: HTMLElement) => {
      if(this.sideMenuOpen) {
        option.style.display = 'block';
        if(sideMenuContainer) sideMenuContainer.style.width = 'calc(276px - (var(--space-4) * 2))';
      } else {
        if(sideMenuContainer) sideMenuContainer.style.width = 'fit-content';
        option.style.display = 'none';
      }
    });
  }
}
