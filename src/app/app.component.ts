import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Navigate } from './constants';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';
  @ViewChild('navbar') navbar: ElementRef;

  constructor (private router: Router, private _authService: AuthService) {
    setTimeout(() => {
      this.navbar.nativeElement.addClass = 'fixed-top'
    }, 0)
  }

  navigate(route) {
    switch (route) {
      case Navigate.HOME:
        this.router.navigateByUrl("/dashboard");
        break;
      case Navigate.PROFILE:
        this.router.navigateByUrl("/profile");
        break;
      case Navigate.FORUM:
        this.router.navigateByUrl("/forum");         
    }
  }

}
