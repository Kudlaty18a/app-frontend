import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserAccount } from '../model/model.user-account';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayColumns = ['id', 'username'];
  dataSource = new MatTableDataSource();

  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

}
