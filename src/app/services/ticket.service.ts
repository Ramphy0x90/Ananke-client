import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TicketFormCreate } from 'src/app/models/ticket/ticket-form-create';
import { Ticket } from '../models/ticket/ticket';
import { TicketFormEdit } from '../models/ticket/ticket-form-edit';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  /**
   * This function is used to get all tickets
   * @returns Observable of tickets
   */
  getTickets(): Observable<any> {
    return this.httpClient.get(
      `${environment.server}/ticket/all`, this.httpOptions
    )
  }

  /**
   * This function is used to get all tickets for a user
   * @returns Observable of tickets
   */
  getTicketsByUser(id: number): Observable<any> {
      return this.httpClient.get(
        `${environment.server}/ticket/all/${id}`, this.httpOptions
      )
    }

  /**
   * This function is used to get a ticket
   * by given id
   * @param id ticket id
   * @returns Ticket
   */
  getTicket(id: number): Observable<any> {
    return this.httpClient.get(
      `${environment.server}/ticket/${id}`, this.httpOptions
    )
  }

  /**
   * This function gets all ticket states
   * @returns list of states
   */
  getStates(): Observable<any> {
    return this.httpClient.get(
      `${environment.server}/ticket/status/all`, this.httpOptions
    )
  }

  /**
   * This function gets all ticket priorities
   * @returns list of priorities
   */
  getPrioties(): Observable<any> {
    return this.httpClient.get(
      `${environment.server}/ticket/priority/all`, this.httpOptions
    )
  }

  /**
   * This function gets all ticket categories
   * @returns list of categories
   */
  getCategories(): Observable<any> {
    return this.httpClient.get(
      `${environment.server}/ticket/category/all`, this.httpOptions
    )
  }

  /**
   * This functions is used to create a new ticket
   * @param ticket data
   */
  createTicket(ticket: TicketFormCreate): Observable<any> {
    return this.httpClient.post(
      `${environment.server}/ticket/create`, ticket, this.httpOptions
    );
  }

  /**
   * This functions is used to update a ticket
   * @param ticket data
   */
  updateTicket(ticket: TicketFormEdit): Observable<any> {
    return this.httpClient.post(
      `${environment.server}/ticket/update`, ticket, this.httpOptions
    );
  }
}
