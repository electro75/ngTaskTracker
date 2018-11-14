import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { TodosService } from 'src/app/todos/services/todos.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  public maxDate;
  public isLoading = false;

  private loaderSub = new Subscription;

  constructor(private authService: AuthService, private router: Router, 
              private todosService: TodosService) { }

  ngOnInit() {
    
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18 );
  }

  submitForm(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    }).subscribe((res: HttpResponse<any>) => {
      let token = res.headers.get('x-auth');
      this.todosService.storeToken(token);
      this.authService.authChange.next(true);
      this.router.navigate(['todos'])
    })
  }

  ngOnDestroy() {
    if(this.loaderSub) {
      this.loaderSub.unsubscribe()
    }
    
  }

}
