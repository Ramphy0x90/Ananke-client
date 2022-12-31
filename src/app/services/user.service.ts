import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user/user';
import { UserLogin } from '../models/user/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userStatus: EventEmitter<boolean> = new EventEmitter;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  /**
   * This function is used to autenticate an user
   * @param user crednetials
   * @returns 
   */
  logIn(user: UserLogin): Observable<any> {
    return this.httpClient.post(
      `${environment.server}/user/log-in`, user, this.httpOptions
    );
  }

  /**
   * This function is used to save on session
   * the current logged user
   * @param user data
   * @param token JWT token
   */
  saveLogInUser(user: User, token: string): void {
    window.sessionStorage.clear();

    this.userStatus.emit(true);
    window.sessionStorage.setItem('user', JSON.stringify(user));
    window.sessionStorage.setItem('token', token);
  }

  /**
   * This function returns
   * the current logged user
   * @returns user data
   */
  getLoggedUser(): User | null {
    let user = window.sessionStorage.getItem('user');
    if (user) return JSON.parse(user);

    return null;
  }

  /**
   * Get logged user token
   * @returns JWT token
   */
  getLoggedUserToken(): string {
    let token = window.sessionStorage.getItem('token');
    return token ? token : '';
  }

  /**
   * Check if a user is logged
   * @returns boolean
   */
  isLoggedIn(): boolean {
    return window.sessionStorage.getItem('user') !== null;
  }

  /**
   * Log out user
   */
  logOut(): void {
    this.userStatus.emit(false);
    window.sessionStorage.clear();
  }
}
