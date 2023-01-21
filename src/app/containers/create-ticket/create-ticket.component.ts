import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent {
  constructor(private toastr: ToastrService) {}

  notify(event: any): void {
    switch(event.type) {
      case 'success':
        this.toastr.success(event.message);
        break;
      case 'error':
        this.toastr.error(event.message);
        break;
    }
  }
}
