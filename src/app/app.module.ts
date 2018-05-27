import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';

import { FormsModule } from '@angular/forms';
import { AuthService } from "./service/auth.service";
<<<<<<< HEAD
import {HttpModule} from "@angular/http";
import {AccountService} from "./service/account.service";
import {routing} from "./app.routing";
import {UrlPermission} from "./url-permission/url.permission";
import { UserComponent } from './user/user.component';
=======
import { HttpModule } from "@angular/http";
import { RegistrationService } from "./service/registration.service";
import { routing } from "./app.routing";
import { UrlPermission } from "./url-permission/url.permission";
import { RegistrationComponent } from './component/registration/registration.component';
>>>>>>> a761789217f996faf78918fc59d0791d66bf1dc3

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
<<<<<<< HEAD
    UserComponent
=======
    RegistrationComponent
>>>>>>> a761789217f996faf78918fc59d0791d66bf1dc3
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [AuthService, RegistrationService, UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
