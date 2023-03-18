import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent {
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
