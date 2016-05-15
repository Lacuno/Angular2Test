export class User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    gender: Gender;
}

export enum Gender {
    male = 0,
    female = 1
}

