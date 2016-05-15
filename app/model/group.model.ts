import { User } from './user.model';

/**
 * Domain Model of a group that participates in a tourament
 */
export class Group {
    users: Array<User>;
    points: number;
    gamesPlayed: number;
}