import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  filtersLoaded: Promise<boolean>;
  userProfile: any;

  constructor(private _profileService: TodoService, private toastr: ToastrService, private _router: Router) { }

  ngOnInit() {
    try {
      this.filtersLoaded = Promise.resolve(false)
      this.getProfile()
    } catch (error) {
      console.log(error)
    }
  }

  getProfile() {
    this._profileService.profile()
      .subscribe(response => {
        response = JSON.parse(response);
        if(response) {
          if(response.status == 0) {
            this.toastr.error(response.message);
          } else {
            this.userProfile = response.data
          }
        }
        this.filtersLoaded = Promise.resolve(true);        
      }, error => {
        console.log('Error: ', error)
        this.filtersLoaded = Promise.resolve(true);
      })
  }

  getAllTasks() {
    this._router.navigateByUrl('/dashboard');
  }

}
