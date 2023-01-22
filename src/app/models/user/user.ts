export interface User {
    id: number;
    name: String;
    surname: String;
    email: String;
    status: number;
    password: String | null;
    roles: String[];
}
