import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {UserModel} from '../models/user.model';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Todo} from '../models/todo.model';
import {Goals} from '../models/goals';
import {TodoListModel} from '../models/todolist.model';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient
  ) { }

  getUsers(): any {
    return this.httpClient.get('http://localhost:8083/api/users')
      .pipe(map(res => res),
        catchError(this._handleError));
  }

  getUserById$(id: string): any {
    return this.httpClient
      .get(`http://localhost:8083/api/users/${id}/todos`)
      .pipe(map(res => res),
      catchError(this._handleError));
  }

  getUserTodos(id: string): any {
    return this.httpClient
      .get(`http://localhost:8083/api/users/${id}`)
      .pipe(map(res => res),
      catchError(this._handleError));
  }

  updateUser(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}`, user)
      .pipe(catchError(this._handleError));
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
  postTodoList(data: Observable<TodoListModel[]>, id: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post<TodoListModel>(`http://localhost:8083/api/users/${id}/todolists`,
      JSON.stringify(data), {
        headers: headers
      }
    )
      .subscribe(todo => {
        return todo;
      });
  }


  updateUserTodos(user: UserModel): any {
    console.log(user);
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/todolists`, user)
      .pipe(catchError(this._handleError));
  }

  // GOALS
  postGoals(data: Observable<Goals[]>, id: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post<Goals>(`http://localhost:8083/api/users/${id}/goals`,
      JSON.stringify(data), {
        headers: headers
      }
    )
      .subscribe(goal => {
        return goal;
      });
  }
  updateGoals(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/goals`, user)
      .pipe(catchError(this._handleError));
  }
  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return throwError(errorMsg);
  }

}

