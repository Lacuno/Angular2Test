import { User } from './user.model';
import { Game } from './game.model';

/**
 * Domain Model of a tournament
 */
export class Tournament {
    id: string;
    name: string;
    description: string;
    game: string;
    participants: Array<User>;
    playedGames: Array<Game>;
    type: TournamentType;
}

export enum TournamentType {
    planning,
    started,
    completed
}

