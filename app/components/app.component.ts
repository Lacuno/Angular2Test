import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';
import { PageNotFoundComponent } from './404.component';
import { TournamentsComponent } from './tournaments.component';
import { MyTournamentsComponent } from './mytournaments.component';
import { TournamentComponent } from './tournament.compontent';

@Component({
    selector: 'tournament-app',
    templateUrl: '/app/components/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/users/:id', component: UserComponent},
    {path: '/users', component: UsersComponent},
    {path: '/tournaments/:id', component: TournamentComponent},
    {path: '/tournaments', component: TournamentsComponent},
    {path: '/mytournaments', component: MyTournamentsComponent},
    {path: '*', component: PageNotFoundComponent}
])
export class AppComponent {
    constructor(private router: Router) {}
}