import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  @Output() themeUpdate = new EventEmitter<String>();
  @Output() currentPage = new EventEmitter<String>();
  @Output() currentView = new EventEmitter<String>();

  constructor() { }

  /**
   * Set the current page
   * @param page 
   */
  setCurrentPage(page: string): void {
    this.currentPage.emit(page);
  }

  /**
   * Set the current view
   * @param view 
   */
  setCurrentView(view: string): void {
    this.currentView.emit(view);
  }

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
