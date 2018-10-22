import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TodosComponent } from "./todos/components/todos/todos.component";

const routes : Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'todos', component: TodosComponent }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports  : [RouterModule]
})

export class  AppRoutingModule  {  }