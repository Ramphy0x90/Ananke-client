import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket/ticket';
import { Event } from 'src/app/models/events-service/event';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-tickets-table',
  templateUrl: './tickets-table.component.html',
  styleUrls: ['./tickets-table.component.css']
})
export class TicketsTableComponent implements OnInit{
  @Input() tickets: Ticket[] = [];
  
  selectedTickets: Ticket[] = [];
  visibleColumns: string[] = [
    "Id",
    "Title",
    "Description",
    "Status",
    "Priority",
    "Category",
    "Created date",
    "Last edit date"
  ];

  event: Event = {
    id: "tickets-table",
    name: "selected-records",
    description: "",
    direction: 1,
    data: []
  };

  constructor(private router: Router,
    private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.register(this.event);
  }

  /**
   * Select tickets in order to perform
   * specific actions
   * @param ticket object
   */
  select(ticket: Ticket): void {
    // If selected ticket is not checked then check it
    if(!this.selectedTickets.includes(ticket)) {
      if(this.selectedTickets.length < 99) {
        this.selectedTickets.push(ticket);
      }
    } else {
      // If selected ticket is checked, un select it
      let index = this.selectedTickets.findIndex(t => t.id === ticket.id);
      this.selectedTickets.splice(index, 1);
    }

    if(this.selectedTickets.length == 1) {
      this.eventsService.set('currentTicket', this.selectedTickets[0]);
    }

    this.event.data = this.selectedTickets;
    this.eventsService.register(this.event);
  }

  /**
   * From a given ticket id nvaigate to page details
   * @param id ticket id
   */
  navigate(id: number): void {
    this.router.navigate(["app/ticket", id])
  }
}
