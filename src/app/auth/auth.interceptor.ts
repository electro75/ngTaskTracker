import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs';
import { pipe } from 'rxjs'
import { tap } from 'rxjs/operators'
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
                .pipe(
                    tap(evt => {
                        if (evt instanceof HttpResponse) {
                          // let token = evt.headers.get('x-auth')
                          // this.todoService.storeToken(token);
                        }
                    }));

  }
}