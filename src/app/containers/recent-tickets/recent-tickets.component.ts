import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-recent-tickets',
  templateUrl: './recent-tickets.component.html',
  styleUrls: ['./recent-tickets.component.css']
})
export class RecentTicketsComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {} 

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe({
      next: (data) => {
        this.tickets = data;
      }
    });
  }
}
