import { Role } from "./role";

export interface UserResponse {
    id: number;
    name: String;
    surname: String;
    email: String;
    status: number;
    roles: Role[];
}
