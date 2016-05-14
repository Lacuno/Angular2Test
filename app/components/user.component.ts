import { Component } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { User, Gender} from '../model/user.model';

@Component({
    templateUrl: '/app/components/user.html'
})
export class UserComponent {
    user: User;
    constructor() {}

    routerOnActivate(r: RouteSegment) : void {
        let id = r.getParam('id');
        // TODO: Call userservice and remove mock
        this.user = new User();
        this.user.id = id;
        this.user.username = 'Mockuser';
        this.user.gender = Gender.male;
        this.user.firstname = 'Chris';
        this.user.lastname = 'Mockweiler';
    }
}