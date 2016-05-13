import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { UserComponent } from './user.component';
import { TestComponent } from './test.component';

@Component({
    selector: 'tournament-app',
    templateUrl: '/app/components/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/user', component: UserComponent},
    {path: '*', component: TestComponent}
])
export class AppComponent {
    constructor(private router: Router) {}
}