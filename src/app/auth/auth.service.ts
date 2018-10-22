import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';
import { environment } from '../../environments/environment';
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { HttpClient } from '@angular/common/http';



@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {  }

    authChange = new Subject<boolean>();
    private isAuthentiacted = false

    

    registerUser(authData: AuthData) {
        
    }

    login(authData: AuthData) {
       return this.http.post(`${environment.url}users/login`, authData)
    }

    logout() {
        
    }

    

    isAuth() {
        return false;
    }

}