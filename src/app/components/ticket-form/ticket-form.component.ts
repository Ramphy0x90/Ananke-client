import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketField } from 'src/app/models/ticket/ticket-field';
import { TicketFormCreate } from 'src/app/models/ticket/ticket-form-create';
import { EventsService } from 'src/app/services/events.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  @Input() type!: string;
  @Output() formNotify = new EventEmitter<any>();

  formData!: TicketFormCreate;
  states: TicketField[] = [];
  priorities: TicketField[] = [];
  categories: TicketField[] = [];

  defaultFields = {
    state: "Open",
    priority: "Medium",
    category: "-"
  };

  constructor(private router: Router,
    private ticketService: TicketService,
    private eventService: EventsService) {}

  ngOnInit(): void {
    this.initForm();
	}

  /**
   * This function is used to init 
   * form data empty values
   */
  initForm(): void {
    if(this.eventService.get("currentTicket") != undefined) {
      this.formData = this.eventService.get("currentTicket");

      this.defaultFields.state = this.formData.status.name;
      this.defaultFields.priority = this.formData.priority.name;
      this.defaultFields.category = this.formData.category.name;
    } else {
      this.formData = {
        title: "",
        category: {id: 0, name: "", weight: null},
        status: {id: 0, name: "", weight: null},
        priority: {id: 0, name: "", weight: null},
        description: ""
      };
    }

    this.initTicketMetadata();
  }

  /**
   * This function is used to init
   * form fields options getting them from backend
   */
  initTicketMetadata(): void {
    this.ticketService.getStates().subscribe({
      next: (data) => {
        this.states = data;

        let defaultIndex = this.getFieldKey(data, this.defaultFields.state);
        this.formData.status = data[defaultIndex];
      }
    });

    this.ticketService.getPrioties().subscribe({
      next: (data) => {
        this.priorities = data;

        let defaultIndex = this.getFieldKey(data, this.defaultFields.priority);
        this.formData.priority = data[defaultIndex];
      }
    });

    this.ticketService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;

        let defaultIndex = this.getFieldKey(data, this.defaultFields.category);
        this.formData.category = data[defaultIndex];
      }
    });
  }

  /**
   * This function is used to submit form data
   * so create a new ticket
   * @param form data
   */
  submit(form: NgForm): void {   
    switch(this.type) {
      case 'create':
        this.ticketService.createTicket(form.value).subscribe({
          next: (data) => {
            this.formNotify.emit({type: 'success', message: 'Ticket created successfully'});
            this.router.navigate(['app/tickets']);
          },
          error: (error) => {
            this.formNotify.emit({type: 'error',message: 'Error creating ticket'});
            console.log(error);
          }
        });
        break;
    }
  }

  /**
   * This function is used to close the form
   * and clear form data
   */
  close(): void {
    this.initForm();
    this.router.navigate(['app/tickets']);
  }

  /**
   * This function is used to search an index
   * by a given value in order to set default values
   * @param fields Array of fields
   * @param value Value to search
   * @returns index
   */
  getFieldKey(fields: TicketField[], value: string): any {
    return fields.findIndex(item => item.name === value);
  }
}