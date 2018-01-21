import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserModel} from '../../models/user.model';
import {Subscription} from 'rxjs/Subscription';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-goal-of-life',
  templateUrl: './goal-of-life.component.html',
  styleUrls: ['./goal-of-life.component.scss']
})
export class GoalOfLifeComponent implements OnInit, OnDestroy {

  @Input() user: UserModel;
  id: string;
  users: any;
  username: string;
  password: string;
  email: string;
  todos = [];
  subscription: Subscription;

  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit() {
    this.onGetUsers();
    this.subscription = this.loginService.getUser().subscribe(user => {
      this.user = user;
    });
    // console.log(this.loginService.getUser());
  }
  onGetUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.users.find((user) => {
        this.user = user;
        // if (this.user.username === username) {
        //   console.log(this.user);
        // }
      });
    });
  }
  getMainGoal(data) {
    this.user = new UserModel(
       this.id = this.user._id,
      this.username = this.user.username,
      this.password = this.user.password,
      this.email = this.user.email,
      this.user.goL = data,
    );
    this.userService.updateUser(this.user._id, this.user) .subscribe(
      user => this.user = user
    );
    console.log(this.user);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
