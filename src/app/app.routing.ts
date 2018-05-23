import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import { ProfileComponent } from "./component/profile/profile.component";
import { UrlPermission } from "./url-permission/url.permission";
import { RegistrationComponent } from './component/registration/registration.component';

const appRoutes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);