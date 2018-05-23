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

  username: string;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    this.authService.logout();
  }



}
