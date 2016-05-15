import { Component } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { Tournament } from '../model/tournament.model';
import { User, Gender } from '../model/user.model';
import { TournamentType } from '../model/tournament.model';

@Component({
    templateUrl: '/app/components/tournament.html'
})
export class TournamentComponent {
    tournament : Tournament;

    routerOnActivate(r: RouteSegment) : void {
        let id = r.getParam('id');
        // TODO: Remove mock and replace it with a call to the backend
        this.tournament = new Tournament();
        this.tournament.id = id;
        this.tournament.game = "MockGame";
        this.tournament.description = "MockDescription MockDescription MockDescription MockDescription MockDescription" +
            "MockDescription MockDescription MockDescription MockDescription MockDescription MockDescription MockDescription " +
            "MockDescription MockDescription MockDescription MockDescription MockDescription MockDescription MockDescription " +
            "MockDescription MockDescription MockDescription MockDescription MockDescription MockDescription MockDescription";
        this.tournament.name = "MockTournament";
        this.tournament.type = TournamentType.planning;
        this.tournament.playedGames = [];

        let user1 = new User();
        user1.firstname = "Max";
        user1.lastname  = "Mockman";
        user1.gender    = Gender.male;
        user1.id        = "abcde";
        user1.username  = "Mockuser1";
        let user2 = new User();
        user2.firstname = "Michele";
        user2.lastname  = "Mockwoman";
        user2.gender    = Gender.female;
        user2.id        = "cdefgh";
        user2.username  = "Mockuser2";
        this.tournament.participants = [user1, user2];
    }
}