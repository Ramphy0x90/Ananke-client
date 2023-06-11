import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
import { SubRouteTransitionAnimations } from 'src/app/transitions/sub-route-transition-animations';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  animations: [SubRouteTransitionAnimations],
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(
    private ticketService: TicketService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let user = this.userService.getLoggedUser();

    if (user != null) {
      this.ticketService.getTicketsByUser(user.id).subscribe({
        next: (data) => {
          this.tickets = data;
        },
      });
    }
  }
}
