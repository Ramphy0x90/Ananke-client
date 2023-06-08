import { Component, Input } from '@angular/core';
import { Option } from 'src/app/models/nav-bar/option';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() optionData?: Option;
}
