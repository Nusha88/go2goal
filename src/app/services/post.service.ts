import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs/index';
import {catchError, map} from 'rxjs/operators';
import {Posts} from '../models/posts';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  // POSTS
  private url = 'https://go2goal.herokuapp.com/api';

  getPosts(): any {
    return this.httpClient.get(`${this.url}/posts`)
      .pipe(map(res => res),
        catchError(this._handleError));
  }

  postPost(data: Observable<Posts[]>) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post<Posts>(`${this.url}/posts`,
      JSON.stringify(data), {
        headers: headers
      }
    )
      .subscribe(post => {
        return post;
      });
  }

  updatePost(post: Posts, id: string): any {
    return this.httpClient
      .put(`${this.url}/posts/${id}`, post)
      .pipe(catchError(this._handleError));
  }
  updatePostLikes(post: Posts): any {
    return this.httpClient
      .put(`${this.url}/posts/${post._id}/likes`, post)
      .pipe(catchError(this._handleError));
  }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return throwError(errorMsg);
  }
}
