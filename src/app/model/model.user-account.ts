import { Role } from  "./model.role";

export class UserAccount {
    userId: number;
    username: string = "";
    password: string = "";
    roles: Role[];

}