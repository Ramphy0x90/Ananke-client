export interface Ticket {
    id: number;
    title: string;
    description: string;
    status: any;
    assignee: any;
    provisionalAssignee: any;
    category: any;
    priority: any;
    creationDate: Date;
    closeData: Date;
}
