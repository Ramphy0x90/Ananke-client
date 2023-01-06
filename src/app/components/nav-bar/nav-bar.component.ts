import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/models/nav-bar/option';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  /**
   * 1 = ONLY-UNLOGGED
   * 2 = ALL 
   * 3 = LOGGED
   * 4 = ONLY-ADMIN
   */
  test = [1, 2, 3, 4]
  navBarOptions: Option[] = [
    {
      name: 'Home',
      route: 'home',
      access: 1
    },
    {
      name: 'App',
      route: 'app',
      access: 3
    },
    {
      name: 'Login',
      route: 'log-in',
      access: 1
    },
    {
      name: 'Logout',
      route: 'home',
      access: 3
    }
  ];

  constructor(private userService: UserService) { }

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
      if(this.userService.isLoggedIn() && user?.roles.includes('ROLE_ADMIN')) {
        return true;
      }
    }

    console.log("ESTAAy")

    return false;
  }
}

