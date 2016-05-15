import { User } from './user.model';
import { Group } from './group.model';

/**
 * Domain Model of a played game
 */
export class Game {
    id: string;
    winner: Group;
    loser: Group;
    date: Date;
}

