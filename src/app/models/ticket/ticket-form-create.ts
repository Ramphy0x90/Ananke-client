import { TicketField } from "./ticket-field";

export interface TicketFormCreate {
    title: string;
    category: TicketField;
    status: TicketField;
    priority: TicketField;
    description: string;
}
