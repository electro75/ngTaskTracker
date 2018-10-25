import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TodosComponent } from "./todos/components/todos/todos.component";
import { AuthGuard } from "./auth/auth.guard";

const routes : Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports  : [RouterModule]
})

export class  AppRoutingModule  {  }