import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(public service: UserService, public loginService: LoginService) {
  }

  storedUsername = localStorage.getItem('username');
  user: any;
  username: string;
  email: string;
  password = '';
  oldPassword: any;
  newPassword: any;
  changed = false;
  updated = false;
  wrongPassword = false;

  onChangePassword(oldPass, newPass) {
    if (oldPass === this.password) {
      this.user.password = newPass;
      this.service.updateUserPassword(this.user).subscribe(user => user);
      this.changed = true;
    } else {
      this.wrongPassword = true;
    }
  }

  updateProfile(username, email) {
    this.user.username = username;
    this.user.email = email;
    this.updated = true;
    this.service.updateUser(this.user).subscribe(user => user);
    localStorage.setItem('username', this.user.username);
    console.log(this.user);
  }

  ngOnInit() {
    this.service.getUsers().subscribe((users) => {
      users.forEach((user) => {
        if (this.storedUsername === user.username) {
          this.user = user;
          this.password = this.user.password;
          this.username = user.username;
          this.email = user.email;
        }
      });
    });
  }

}
