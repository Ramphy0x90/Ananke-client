import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketFormCreate } from 'src/app/models/ticket/ticket-form-create';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  formData!: TicketFormCreate;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initForm();
	}

  /**
   * This function is used to init 
   * form data empty values
   */
  initForm(): void {
    this.formData = {
      title: "",
      category: 0,
      status: 0,
      priority: 0,
      description: ""
    };
  }

  /**
   * This function is used to submit form data
   * so create a new ticket
   * @param form data
   */
  submit(form: NgForm): void {
    console.log(form.value);
  }

  /**
   * This function is used to close the form
   * and clear form data
   */
  close(): void {
    this.initForm();
    this.router.navigate(['app/tickets']);
  }
}