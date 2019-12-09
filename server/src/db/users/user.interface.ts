export interface  IUser {
    firstName: string;
    lastName: string;
    id: number;
}

export interface IServerUser extends IUser {
    email: string;
    password: string;
    token: string;
}
