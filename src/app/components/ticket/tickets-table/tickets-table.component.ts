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

  /**
   * From a given ticket id nvaigate to page details
   * @param id ticket id
   */
  navigate(id: number): void {
    this.router.navigate(["app/ticket", id])
  }
}
