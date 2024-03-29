import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Option } from 'src/app/models/nav-bar/option';
import { User } from 'src/app/models/user/user';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentTheme!: String;

  /**
   * 1 = ONLY-UNLOGGED
   * 2 = ALL 
   * 3 = LOGGED
   * 4 = ONLY-ADMIN
   */
  navBarOptions: Option[] = [
    {
      id: 'NB:home',
      name: 'Home',
      icon: '',
      route: 'home',
      access: 1
    },
    {
      id: 'NB:app',
      name: 'App',
      icon: '',
      route: 'app',
      access: 3
    },
    {
      id: 'NB:admin',
      name: 'Admin',
      icon: '',
      route: 'admin',
      access: 4
    },
    {
      id: 'NB:login',
      name: 'Login',
      icon: '',
      route: 'log-in',
      access: 1
    },
    {
      id: 'NB:logout',
      name: 'Logout',
      icon: '',
      route: 'home',
      access: 3
    }
  ];

  constructor(private userService: UserService,
    private navigationService: NavigationService,
    private router: Router) {
    this.navigationService.themeUpdate.subscribe({
      next: (theme: String) => {
        this.currentTheme = theme;
      }
    });

    this.currentTheme = this.navigationService.getCurrentTheme();
  }

  ngOnInit(): void {
  }

  showNavOption(accessLevel: number): boolean {
    let user: User | null = this.userService.getLoggedUser();

    if(accessLevel == 1) {
      if(!this.userService.isLoggedIn()) {
        return true;
      }
    }

    if(accessLevel == 2) {
      return true;
    }

    if(accessLevel == 3) {
      if(this.userService.isLoggedIn()) {
        return true;
      }
    }

    if(accessLevel == 4) {
      let checkAdmin = user?.roles.filter((role) => role.name == 'ROLE_ADMIN')
      if(checkAdmin) {
        return true;
      }
    }

    return false;
  }

  changeTheme(theme: String): void {
    this.navigationService.changeTheme(theme);
    window.location.reload();
  }

  logOut(): void {
    this.userService.logOut();
    this.router.navigate(["/home"]);
  }
}

