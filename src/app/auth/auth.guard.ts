import { CanActivate, ActivatedRouteSnapshot, 
            RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TodosService } from '../todos/services/todos.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private router: Router,
                private todosService: TodosService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.todosService.getToken()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }

    canLoad(route: Route) {
        if(this.authService.isAuth()){
            return true;

        } else {
            this.router.navigate(['/login']);
        }
    }

}