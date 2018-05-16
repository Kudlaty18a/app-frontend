import { UserAccount } from "./model.user-account";

export class Role {
    roleId: number;
    name: string = "";
    users: UserAccount[];
}