import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  _loading = false;
  _userModel: any = {
    email: "",
    password: ""
  }

  constructor(private _router: Router, private _loginService: TodoService, private toastr: ToastrService) {
    if(localStorage.getItem('USER')) {
      this._router.navigate(['dashboard'])
    }
  }

  ngOnInit() {
    try {
    } catch (error) {
      console.log(error)
    }
  }


  onFormSubmit() {
    this._loading = true;
    this._loginService.login(this._userModel)
      .subscribe(response => {
        response = JSON.parse(response)
        if(response) {
          if(response.status == 1) {
            this.toastr.success(response.message)
            localStorage.setItem('USER', JSON.stringify(response));
            this._router.navigate(['/dashboard']);
          } else {
            this.toastr.error(response.message)
          }
        }
      })
  }

  register() {
    this._router.navigate(['register'])
  }

  forgotPassword() {
    this._router.navigate(['forgot-password'])
  }

}
