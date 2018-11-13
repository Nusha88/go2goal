import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs/index';
import {catchError, map} from 'rxjs/operators';
import {Review} from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient: HttpClient) { }
  getReviews(): any {
    return this.httpClient.get('http://localhost:8083/api/reviews')
      .pipe(map(res => res),
        catchError(this._handleError));
  }

  postReviews(data: Review) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
      .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.post<Review>('http://localhost:8083/api/reviews',
      JSON.stringify(data), {
        headers: headers
      }
    )
      .subscribe(review => {
        return review;
      });
  }
  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    return throwError(errorMsg);
  }
}
