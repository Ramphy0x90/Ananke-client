export interface Ticket {
    id: number;
    title: string;
    description: string;
    status: string;
    assignee: any;
    provisionalAssignee: any;
    category: string;
    priority: string;
    creationDate: Date;
    closeData: Date;
}
