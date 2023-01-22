import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket/ticket';

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
    "Created date"
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  select(ticket: Ticket): void {
    if(!this.selectedTickets.includes(ticket)) {
      if(this.selectedTickets.length < 99) {
        this.selectedTickets.push(ticket);
      }
    } else {
      let index = this.selectedTickets.findIndex(t => t.id === ticket.id);
      this.selectedTickets.splice(index, 1);
    }
  }

  /**
   * From a given ticket id nvaigate to page details
   * @param id ticket id
   */
  navigate(id: number): void {
    this.router.navigate(["app/ticket", id])
  }
}
