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
  constructor(private router: Router,
              private userService: UserService,
              public loginService: LoginService) {}

  sendUser(): void {
    this.loginService.sendUser(this.user.username);
  }
  ngOnInit() {
    this.router.navigate(['/welcome']);
    // const username = localStorage.getItem('username');
    // const password = localStorage.getItem('password');
    //
    // if (!username && !password) {
    //   this.router.navigate(['/login']);
    // } else {
    //   this.userService.getUsers().subscribe(u => {
    //     this.users = u;
    //     this.users.find(user => {
    //       this.user = user;
    //       // console.log(this.user.username);
    //       if (username === this.user.username && password === this.user.password) {
    //         this.router.navigate(['/', this.user._id]);
    //         return this.sendUser();
    //       } else if (!username === this.user.username && !password === this.user.password) {
    //         this.router.navigate(['/login']);
    //       }
    //     });
    //   });
    // }

  }
}
