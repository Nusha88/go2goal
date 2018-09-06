import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {UserModel} from '../models/user.model';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {TodoListModel} from '../models/todolist.model';
import {Posts} from '../models/posts';
import {NoteModel} from '../models/note.model';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  // USERS

  getUsers(): any {
    return this.httpClient.get('http://localhost:8083/api/users')
      .pipe(map(res => res),
        catchError(this._handleError));
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

  getUserById$(id: string): any {
    return this.httpClient
      .get(`http://localhost:8083/api/users/${id}/todos`)
      .pipe(map(res => res),
        catchError(this._handleError));
  }

  // updateUser(user: UserModel): any {
  //   console.log(user);
  //   return this.httpClient
  //     .put(`http://localhost:8083/api/users/${user._id}`, user)
  //     .pipe(catchError(this._handleError));
  // }

  postUserPost(data: Observable<Posts[]>, id: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');
    console.log(data);
    return this.httpClient.post<Posts>(`http://localhost:8083/api/users/${id}/posts`,
      JSON.stringify(data), {
        headers: headers
      }
    )
      .subscribe(post => {
        return post;
      });
  }

  updateUserPosts(user: UserModel): any {
    console.log(user);
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/posts`, user)
      .pipe(catchError(this._handleError));
  }

  // TODOLISTS

  postTodoList(data: Observable<TodoListModel[]>, id: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');
    console.log(data + ',' + id);
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
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/todolists`, user)
      .pipe(catchError(this._handleError));
  }

  // POSTS

  getPosts(): any {
    return this.httpClient.get('http://localhost:8083/api/posts')
      .pipe(map(res => res),
        catchError(this._handleError));
  }

  postPost(data: Observable<Posts[]>) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');
    console.log(data);

    return this.httpClient.post<Posts>('http://localhost:8083/api/posts',
      JSON.stringify(data), {
        headers: headers
      }
    )
      .subscribe(post => {
        return post;
      });
  }

  updatePost(post: Posts): any {
    console.log(post);
    return this.httpClient
      .put(`http://localhost:8083/api/posts/${post._id}`, post)
      .pipe(catchError(this._handleError));
  }

  // GOALS

  updateUserDatesYear(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/dates-year`, user)
      .pipe(catchError(this._handleError));
  }

  updateUserDatesMonth(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/dates-month`, user)
      .pipe(catchError(this._handleError));
  }

  updateUserDatesWeek(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/dates-week`, user)
      .pipe(catchError(this._handleError));
  }

  updateGoalOfLife(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/goals/goal-of-life`, user)
      .pipe(catchError(this._handleError));
  }

  updateFirstLevelSteps(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/goals/first-level-steps`, user)
      .pipe(catchError(this._handleError));
  }

  updateGoalsOfYear(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/goals/goals-of-year`, user)
      .pipe(catchError(this._handleError));
  }

  updateGoalsOfMonth(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/goals/goals-of-month`, user)
      .pipe(catchError(this._handleError));
  }

  updateGoalsOfWeek(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/goals/goals-of-week`, user)
      .pipe(catchError(this._handleError));
  }

  postNotes(data: Observable<NoteModel[]>, id: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post<NoteModel>(`http://localhost:8083/api/users/${id}/notes`,
      JSON.stringify(data), {
        headers: headers
      }
    )
      .subscribe(note => {
        return note;
      });
  }

  updateNotes(user: UserModel): any {
    return this.httpClient
      .put(`http://localhost:8083/api/users/${user._id}/notes`, user)
      .pipe(catchError(this._handleError));
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return throwError(errorMsg);
  }
}
