import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';

import { FormsModule } from '@angular/forms';
import { AuthService } from "./service/auth.service";
import {HttpModule} from "@angular/http";
import {AccountService} from "./service/account.service";
import {routing} from "./app.routing";
import {UrlPermission} from "./url-permission/url.permission";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [AuthService, AccountService, UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
