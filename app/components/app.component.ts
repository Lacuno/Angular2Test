import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';
import { TestComponent } from './test.component';

@Component({
    selector: 'tournament-app',
    templateUrl: '/app/components/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/users/:id', component: UserComponent},
    {path: '/users', component: UsersComponent},
    {path: '*', component: TestComponent}
])
export class AppComponent {
    constructor(private router: Router) {}
}