import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseURL = environment.baseURL;
  private userBaseURL = `${this.baseURL}/user`;
  private token = localStorage.getItem('USER')

  _loginUrl = `${this.userBaseURL}/login`;
  _registerUrl = `${this.userBaseURL}/register`;
  _profileUrl = `${this.userBaseURL}/profile`;

  _postToDo = `${this.userBaseURL}/todo`;
  _getTodoList = `${this.userBaseURL}/todo`;

  constructor(private http: HttpClient) { }


  login(user) {
    let body = new HttpParams();
    body = body.set('email', user.email);
    body = body.set('password', user.password);
    return this.http.post<any>(this._loginUrl, body, this.getRequestHeaders())
      .pipe(
        catchError(error => {
          return throwError(error)
        })
      )
  }

  register(user) {
    let body = new HttpParams();
    body = body.set("name", user.name)
    body = body.set('email', user.email);
    body = body.set('password', user.password);
    body = body.set("dateOfBirth", user.dateOfBirth);
    return this.http.post<any>(this._registerUrl, body, this.getRequestHeaders())
      .pipe(
        catchError(error => {
          return throwError(error)
        })
      )
  }

  profile() {
    let body = new HttpParams();
    body = body.set('token', JSON.parse(this.token).data.token);
    return this.http.post<any>(this._profileUrl, body, this.getRequestHeaders())
      .pipe(
        catchError(err => {
          return throwError(err)
        })
      )
  }


  // set headers
  protected getRequestHeaders(): Object {
    let headers;
    headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      // 'Authorization': this.token ? JSON.parse(this.token).data.token : ''
    })
    return { headers, responseType: 'text' };
  }

}
