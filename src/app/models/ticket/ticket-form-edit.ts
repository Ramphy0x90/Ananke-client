import { TicketField } from "./ticket-field";

export interface TicketFormEdit {
    title: string;
    category: TicketField;
    status: TicketField;
    priority: TicketField;
    description: string;
}
