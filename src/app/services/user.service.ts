import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../models/user.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Todo} from '../models/todo.model';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient
  ) { }

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get('http://localhost:8083/api/users')
      .catch(this._handleError)
      .map(res => res);
  }

  getUserById$(id: string): Observable<UserModel> {
    return this.httpClient
      .get(`http://localhost:8083/api/users/${id}/todos`)
      .map(res => res)
      .catch(this._handleError);
  }

  getUserTodos(id: string): Observable<UserModel> {
    return this.httpClient
      .get(`http://localhost:8083/api/users/${id}`)
      .map(res => res)
      .catch(this._handleError);
  }

  updateUser(id: string, user: UserModel): Observable<UserModel> {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${id}`, user)
      .map(todo => todo)
      .catch(this._handleError);
  }

  updateUserGoals(id: string, user: UserModel): Observable<UserModel> {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${id}/goals/goal-of-life`, user)
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

  postTodo(data: Observable<Todo[]>, id: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post<Todo>(`http://localhost:8083/api/users/${id}/todos`,
      JSON.stringify(data), {
        headers: headers
      }
    )
      .subscribe(todo => {
        return todo;
      });
  }

  // updateTodos(id: string, user: UserModel): Observable<UserModel> {
  //   return this.httpClient
  //     .put(`http://localhost:8083/api/users/${id}`, user)
  //     .catch(this._handleError);
  // }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return Observable.throw(errorMsg);
  }

}

