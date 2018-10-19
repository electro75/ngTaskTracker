import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { User } from "./user.model";
import { AuthData } from "./auth-data.model";



@Injectable()
export class AuthService {

    constructor() {  }

    authChange = new Subject<boolean>();
    private isAuthentiacted = false

    

    registerUser(authData: AuthData,) {
        
    }

    login(authData: AuthData) {
       
    }

    logout() {
       
        
        
    }

    

    isAuth() {
        return false;
    }

}