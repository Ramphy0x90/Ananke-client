import { UserResponse } from "../user/user-response";
import { TicketField } from "./ticket-field";

export interface TicketFormCreate {
    title: string;
    category: TicketField;
    status: TicketField;
    priority: TicketField;
    description: string;
    creationDate: Date;
    lastEditDate: Date;
    assignee: UserResponse | null;
}
