import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from '../auth/auth.routing.module';

import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations : [
        SignupComponent,
        LoginComponent
    ],
    imports: [
        SharedModule,
        AuthRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AuthModule {  }