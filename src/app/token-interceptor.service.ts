import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { AuthService } from './auth.service';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private router: Router) { }

  intercept(req, next): Observable<HttpEvent<any>> {
    let authService = this.injector.get(AuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq).pipe(
      tap(resp => {
        if(resp['body'] != undefined) {
          if(resp['body'].body == 'jwt expired') {
            localStorage.removeItem('token')
            this.router.navigateByUrl('/login');
          }
        }
        return throwError(resp);
      }),
      catchError(response => {
        if (response instanceof HttpErrorResponse) {
          localStorage.removeItem('token')
          this.router.navigateByUrl('/login');
        }
        return throwError(response);
      })
    )
  }
}
