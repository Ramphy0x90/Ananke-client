import { Component } from '@angular/core';
import { RouteTransitionAnimations } from 'src/app/transitions/route-transition-animations';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [RouteTransitionAnimations],
})
export class AnankeAppComponent {}
