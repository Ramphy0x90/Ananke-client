import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  @Output() themeUpdate = new EventEmitter<String>();

  constructor() { }

  /**
   * Update the curent app
   * @param theme 
   */
  changeTheme(theme: String): void {
    window.sessionStorage.setItem('theme', theme.toString());
    this.themeUpdate.emit(theme);
  }

  /**
   * Get current theme
   * @returns current theme
   */
  getCurrentTheme(): String {
    let storedTheme = window.sessionStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    } else {
      return 'light';
    }
  }
}
