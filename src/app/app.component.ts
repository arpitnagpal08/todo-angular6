import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Navigate } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';

  constructor (private router: Router) {}

  navigate(route) {
    switch (route) {
      case Navigate.HOME:
        this.router.navigateByUrl("/dashboard");
        break;
      case Navigate.LOGIN:
        this.router.navigateByUrl("/login");
        break;
      case Navigate.REGISTER:
        this.router.navigateByUrl("/register");         
    }
  }

}
