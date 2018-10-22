import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm : FormGroup;
  public isLoading = false;
  public loaderSub = new Subscription;

  constructor(private _fb: FormBuilder, private authService: AuthService,) { }

  ngOnInit() {
   
    this.loginForm = this._fb.group({
      email: [''],
      password: ['']
    })
  }

  submitForm() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe(res => console.log(res));

  }

  ngOnDestroy() {
    if(this.loaderSub) {
      this.loaderSub.unsubscribe();
    }
    
  }

}
