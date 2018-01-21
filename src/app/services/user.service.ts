import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../models/user.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
  data: any = [];
  users = [];

  constructor(private httpClient: HttpClient
  ) { }

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get('http://localhost:8083/api/users')
      .catch(this._handleError)
      .map(res => res);
  }

  getUserById$(id: string): Observable<UserModel> {
    return this.httpClient
      .get(`http://localhost:8083/api/users/${id}`)
      .catch(this._handleError);
  }

  getTodosByUserId$(userId: string): Observable<UserModel[]> {
    return this.httpClient
      .get(`http://localhost:8083/api/users/${userId}/todos`)
      .catch(this._handleError);
  }

  updateUser(id: string, user: UserModel): Observable<UserModel> {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${id}`, user)
      .catch(this._handleError);
  }

  postUser(data: Observable<UserModel[]>) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post<UserModel>('http://localhost:8083/api/users',
      JSON.stringify(data), {
        headers: headers
      }
    )
      .subscribe(user => {
        return user;
      });
  }
  // updateUser(id: string, user) {
  //   return this.httpClient
  //     .put<UserModel>('http://localhost:8083/api/users/' + id, JSON.stringify(user))
  //     .map(data => { return data;
  //     })
  //     .catch(this._handleError);
  // }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return Observable.throw(errorMsg);
  }

}

