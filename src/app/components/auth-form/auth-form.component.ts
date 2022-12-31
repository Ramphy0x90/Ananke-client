import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/user-login';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-auth-form',
	templateUrl: './auth-form.component.html',
	styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
	authForm: UserLogin = { email: null, password: null };
	loggedIn: boolean = false;
	invalidCredentials: boolean = false;
	errorMessage: string = '';

	constructor(private userService: UserService, private router: Router) { }

	ngOnInit(): void {
		if (this.userService.isLoggedIn()) {
			this.router.navigate(['app']);
		}
	}

	onSubmit(): void {
		let user: UserLogin = this.authForm;

		this.userService.logIn(user).subscribe({
			next: (data) => {
				this.loggedIn = true;
				this.invalidCredentials = false;

				this.userService.saveLogInUser(data.user, data.jwtResponse.accessToken);
				//this.router.navigate(['app']);
			},
			error: (err) => {
				this.invalidCredentials = true;
			}
		});
	}
}
