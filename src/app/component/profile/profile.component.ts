import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../../model/model.user-account';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: UserAccount;
  user: any;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout() {
    this.authService.logout()
      .subscribe(data => {
        this.router.navigate(['/login']);
      }, error => {

      });
  }



}
