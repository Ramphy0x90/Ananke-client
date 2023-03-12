import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/ticket/ticket';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  multi: any[] = [
    {name: "Incoming tickets", series: []},
    {name: "Solved tickets", series: []},
    {name: "Unsolved tickets", series: []}
  ];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe({
      next: (data: Ticket[]) => {
        let incomingTickets = _.groupBy(data, (ticket) => {
          let creationDate = new Date(ticket.creationDate);
          return creationDate.toLocaleString('default', {month: 'long'});
        });

        Object.keys(incomingTickets).forEach((month) => {
          this.multi[0].series.push({
            name: month,
            value: incomingTickets[month].length
          });
        });
      }
    });
  }

  single: any[] = [
    {
      "name": "Total tickets",
      "value": 40632,
      "extra": {
        "code": "TT"
      }
    },
    {
      "name": "Open tickets",
      "value": 50000,
      "extra": {
        "code": "OT"
      }
    },
    {
      "name": "Closed tickets",
      "value": 36745,
      "extra": {
        "code": "CT"
      }
    }
  ];

  view1: [number, number] = [800, 400];
  view2: [number, number] = [800, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Months';
  yAxisLabel: string = 'Tickets';
  timeline: boolean = true;

  onSelect(data: any): void {
    console.log('Item clicked', data);
  }

  onActivate(data: any): void {
    console.log('Activate', data);
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', data);
  }
}
