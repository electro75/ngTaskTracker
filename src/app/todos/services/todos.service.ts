import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';
import { environment } from '../../../environments/environment';
import { User } from "../../shared/models/user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';


@Injectable()
export class TodosService {

    private token;
    private requestOptions;

    constructor( private http: HttpClient, private _auth: AuthService  ) { 
        
    }

    storeToken(t) {
        this.token = t;
        this.requestOptions = {
            headers: new HttpHeaders ({
                'Content-Type'  :   'application/json',
                'X-Auth'        :    this.token   
            })
        }
        let token = 'x-auth'
        localStorage.setItem(token, JSON.stringify({token: t}))
    }

    getTodos() {
        return this.http.get(`${environment.url}todos`, this.requestOptions)
    }

    getToken() {
        let token = (JSON.parse(localStorage.getItem('x-auth'))).token;
        this.storeToken(token);
        this._auth.authChange.next(true);
        return token ? true : false;
    }

    completeTask(id, model) {
        console.log(this.requestOptions);
        // return this.http.patch(`${environment.url}todos/${id}`,model, this.requestOptions)
    }
}