import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteTransitionAnimations } from './route-transition-animations';
import { DOCUMENT } from '@angular/common';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [RouteTransitionAnimations]
})
export class AppComponent {
  title: String = 'Ananke-client';
  currentStyle!: String;

  constructor(@Inject(DOCUMENT) private document: Document,
              private navigationService: NavigationService) {
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');

    this.navigationService.themeUpdate.subscribe({
      next: (theme: String) => {
        this.currentStyle = theme;
      }
    });

    this.currentStyle = this.navigationService.getCurrentTheme();
    this.navigationService.changeTheme(this.currentStyle);

    style.rel = 'stylesheet';
    style.href = `../assets/style/_${this.currentStyle}.css`;

    head.appendChild(style);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }
}
