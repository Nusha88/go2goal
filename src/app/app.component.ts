import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: any;
  user: any;
  password: any;
  constructor(private router: Router,
              private userService: UserService,
              public loginService: LoginService) {}

  sendUser(): void {
    this.loginService.sendUser(this.user.username);
  }
  ngOnInit() {
    const username = localStorage.getItem('username');

    if (username) {
      this.userService.getUsers().subscribe(u => {
        this.users = u;
        this.users.find(user => {
          this.user = user;
          if (username === this.user.username) {
            this.password = this.user.password;
            return this.sendUser();
          }
        });
      });
    } else {
      this.router.navigate(['/welcome']);
    }

  }
}
