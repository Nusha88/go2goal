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
  warning = false;
  type = 'password';
  show = false;

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
          localStorage.setItem('remember', 'true');
          this.router.navigate(['/']);
          return this.sendUser();
        }  else if (this.username === this.user.username && this.password === this.user.password && this.remember === false) {
          localStorage.setItem('username', this.username);
          localStorage.setItem('remember', 'true');
          this.router.navigate(['/']);
          return this.sendUser();
        } else {
          this.warning = true;
        }
      });
    });
  }

  toggleShowHidePassword() {
         this.show = !this.show;
         if (this.show) {
               this.type = 'text';
           } else {
               this.type = 'password';
           }
     }

  login() {
    this.onGetUsers();
  }
  ngOnInit() {
    const storedUsername =  localStorage.getItem('username');
    const storedRemember =  localStorage.getItem('remember');
    if (storedUsername && storedRemember === 'true') {
      this.username = storedUsername;
      this.service.getUsers().subscribe(users => {
        this.users = users;
        this.users.find(user => {
          this.user = user;
          if (storedUsername === this.user.username) {
            this.password = this.user.password;
          }
        });
      });
      this.remember = true;
    } else {
      this.username = '';
      this.password = '';
    }
  }

}
