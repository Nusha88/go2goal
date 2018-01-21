import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {UserModel} from '../models/user.model';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  id: string;
  routeSub: Subscription;
  userSub: Subscription;
  user: UserModel;
  todos = [];

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSub = this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this._getUser();
      });
  }

  private _getUser() {
    this.userSub = this.userService
      .getUserById$(this.id)
      .subscribe(
        res => {
          this.user = res;
          console.log(this.user);
        },
        err => {
          console.error(err);
        }
      );
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.userSub.unsubscribe();
  }

}
