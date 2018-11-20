import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { TodosService } from 'src/app/todos/services/todos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm : FormGroup;
  public isLoading = false;
  public errorMessage = '';
  public isErr = false
  public loaderSub = new Subscription;

  constructor(private _fb: FormBuilder, private authService: AuthService,
              private router: Router, private todosService: TodosService) { }

  ngOnInit() {
   
    this.loginForm = this._fb.group({
      email: ['', <any>Validators.required],
      password: ['', <any>Validators.required]
    })

    this.onChanges();
  }

  onChanges() {
    this.loginForm.valueChanges
    .subscribe(val => {
      this.isErr = false;
      this.errorMessage = '';
    })
  }

  submitForm() {
    this.isLoading = true;
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe((res: any) =>{
      this.isLoading = false;
      if(!res.body.error) {
        let token = res.headers.get('x-auth');
        this.todosService.storeToken(token);
        this.authService.authChange.next(true);
        this.router.navigate(['todos'])
      } else {
        this.isErr = true;
        this.errorMessage = res.body.message;
      }
        
    })

  }

  ngOnDestroy() {
    if(this.loaderSub) {
      this.loaderSub.unsubscribe();
    }
    
  }

}
