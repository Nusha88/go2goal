import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  username = '';
  password = '';
  users: any;
  user: any;
  remember = false;

  constructor( private router: Router,
               public service: UserService,
               public loginService: LoginService) { }

  sendUser(): void {
    this.loginService.sendUser(this.user.username);
  }
  onGetUsers() {
    this.service.getUsers().subscribe(u => {
      this.users = u;

      this.users.find(user => {
        this.user = user;
        if (this.username === this.user.username && this.password === this.user.password && this.remember === true) {
          localStorage.setItem('username', this.username);
          localStorage.setItem('password', this.password);
          localStorage.setItem('remember', 'true');
          this.router.navigate(['/', this.user._id]);
          return this.sendUser();
        }  else if (this.username === this.user.username && this.password === this.user.password && this.remember === false) {
          localStorage.removeItem('username');
          localStorage.removeItem('password');
          localStorage.removeItem('remember');
          this.router.navigate(['/', this.user._id]);
          return this.sendUser();
        }
      });
    });
  }


  login() {
    this.onGetUsers();
  }
  ngOnInit() {
    const storedUsername =  localStorage.getItem('username');
    const storedPassword =  localStorage.getItem('password');
    const storedRemember =  localStorage.getItem('remember');
    if (storedUsername && storedPassword && storedRemember) {
      this.username = storedUsername;
      this.password = storedPassword;
      this.remember = true;
    } else {
      this.username = '';
      this.password = '';
    }
  }

}
