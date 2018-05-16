import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
//import {RegisterComponent} from "./component/register/register.component";
import {ProfileComponent} from "./component/profile/profile.component";
import {UrlPermission} from "./url-permission/url.permission";

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);