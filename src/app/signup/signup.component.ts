import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  _loading = false;
  _userModel: any = {
    name: "",
    email: "",
    password: "",
    c_password: ""
  }

  constructor(private _router: Router) {}

  ngOnInit() {
    try {

    } catch (error) {
      console.log(error)
    }
  }


  onFormSubmit() {
    this._loading = true;
    console.log(this._userModel)
    setTimeout(() => {
      this._loading = false;
    }, 1000)
  }

  login() {
    this._router.navigate(['login'])
  }

}


SignupComponent