import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteTransitionAnimations } from './route-transition-animations';
import { DOCUMENT } from '@angular/common';

let currentStyle: string = 'light';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [RouteTransitionAnimations]
})
export class AppComponent {
  title = 'Ananke-client';

  constructor(@Inject(DOCUMENT) private document: Document) {
    const head = this.document.getElementsByTagName('head')[0];
    const style = this.document.createElement('link');

    style.rel = 'stylesheet';
    style.href = `../assets/style/_${currentStyle}.css`;

    head.appendChild(style);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animationState'];
  }
}
