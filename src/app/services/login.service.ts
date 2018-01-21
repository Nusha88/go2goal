
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {UserModel} from '../models/user.model';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  // private subject = new Subject<any>();
  //
  // sendUser(user: string) {
  //   this.subject.next({ text: user });
  // }
  //
  // clearMessage() {
  //   this.subject.next();
  // }
  //
  // getMessage(): Observable<any> {
  //   return this.subject.asObservable();
  // }

  users: UserModel[];
  private user = new BehaviorSubject(undefined);

  constructor() { }

  sendUser(username: any ) {
    this.user.next({ username: username});
  }
  getUser() {
    return this.user.asObservable();
  }

}
