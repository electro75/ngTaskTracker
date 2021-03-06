import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodosComponent } from './todos/components/todos/todos.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TodosService } from './todos/services/todos.service';
import { AuthGuard } from './auth/auth.guard';
import { ConfirmComponent } from './todos/components/modals/confirm.component';
import { AddNewComponent } from './todos/components/modals/add-new.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './todos/components/modals/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    TodosComponent,
    ConfirmComponent,
    AddNewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AuthModule

  ],
  providers: [AuthService, TodosService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  entryComponents: [ConfirmComponent, AddNewComponent, EditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
