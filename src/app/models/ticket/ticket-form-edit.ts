import { UserResponse } from "../user/user-response";
import { TicketField } from "./ticket-field";

export interface TicketFormEdit {
    id: number;
    title: string;
    category: TicketField;
    status: TicketField;
    priority: TicketField;
    description: string;
    creationDate: Date;
    assignee: UserResponse | null;
}
