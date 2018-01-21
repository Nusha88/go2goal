import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  users: any;
  @Input() username: string;
  user: any;
  subscription: Subscription;

  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }
  ngOnInit() {
    this.subscription = this.loginService.getUser().subscribe(user => {
      this.user = user;
      // console.log(this.user);
    });
    // this.userService.getUsers().subscribe(users => {
    //   this.users = users;
    // });
  }

  logout() {
    this.router.navigate(['/login']);
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
