import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TaskToDoComponent } from './task-to-do/task-to-do.component';
import { CreateToDoTaskComponent } from './create-to-do-task/create-to-do-task.component';
import { FormsModule } from '@angular/forms';
import { UpdateToDoTaskComponent } from './update-to-do-task/update-to-do-task.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { BasicAuthInterceptorService } from './service/basic-auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskToDoComponent,
    CreateToDoTaskComponent,
    UpdateToDoTaskComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{  
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthInterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
