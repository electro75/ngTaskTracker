import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { pipe } from 'rxjs'
import { tap, catchError } from 'rxjs/operators'
import { AuthService } from './auth.service';
import { TodosService } from '../todos/services/todos.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private todoService: TodosService) {  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req)
                .pipe(catchError((error, caught)=>{
                  console.log(error)
                  return of(error);
                }) as any);

  }
}