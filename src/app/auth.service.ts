import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _adminLoginUrl = "/admin/login";

  constructor(private http: HttpClient, private router: Router) { }

  loginUser(user){
    return this.http.post<any>(this._adminLoginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('USER')
  }
  logoutUser(){
    localStorage.removeItem('USER')
    this.router.navigate(['/login'])
  }

  getToken(){
    return localStorage.getItem('USER')
  }

}
