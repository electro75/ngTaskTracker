import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';
import { environment } from '../../environments/environment';
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TodosService } from '../todos/services/todos.service';



@Injectable()
export class AuthService {

    private token;
    private requestOptions;

    constructor(private http: HttpClient) {  }

    authChange = new Subject<boolean>();
    private isAuthentiacted = false

    registerUser(authData: AuthData) {
        
    }

    

    login(authData: AuthData) {
       return this.http.post(`${environment.url}users/login`, authData, { headers: {'Content-Type': 'application/json'}, observe: 'response' })
    }

    logout() {
        let token = (JSON.parse(localStorage.getItem('x-auth'))).token;
        localStorage.removeItem('x-auth')
        return this.http.delete(`${environment.url}users/me/token`, { headers: {'Content-Type': 'application/json', 'x-auth': token }});
    }

    isAuth() {
        return false;
    }

}