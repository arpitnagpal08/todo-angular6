import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Tasks } from '../tasks';
import { slideAnimate, fade } from '../animation';
import { Setting } from '../constants';
import { TodoService } from '../todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    slideAnimate,
    fade
  ]
})
export class DashboardComponent implements OnInit {

  filtersLoaded: Promise<boolean>;
  tasksModel = new Tasks();
  @ViewChild('tasksForm') formValues;

  user = '';

  sort: number = Setting.ASC;
  Setting = Setting

  tasks = [
    {
      id: 1,
      title: "Title 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 1."
    },
    {
      id: 2,
      title: "Title 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 2."
    },
    {
      id: 3,
      title: "Title 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 3."
    },
    {
      id: 4,
      title: "Title 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 4."
    },
    {
      id: 5,
      title: "Title 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 5."
    },
    {
      id: 6,
      title: "Title 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit 6."
    },
  ]


  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

  }

  constructor(private _dashboardService: TodoService, private toastr: ToastrService) {
    let _userData = localStorage.getItem('USER');
    if (_userData) {
      this.user = JSON.parse(_userData);
    }
  }

  deleteAll() {
    this.tasks = [];
  }

  ngOnInit() {
    this.filtersLoaded = Promise.resolve(true);
  }

  removeTask(id) {
    let tasksObj = this.tasks.find(o => o.id === id);
    let index = this.tasks.indexOf(tasksObj);
    this.tasks.splice(index, 1);
  }

  onTasksSubmit() {
    if (this.tasksModel.title !== undefined && this.tasksModel.description !== undefined) {
      const obj = {
        id: this.tasks.length + 1,
        title: this.tasksModel.title,
        description: this.tasksModel.description
      }

      //activate loader 
      this.filtersLoaded = Promise.resolve(false);

      // de-activate loader and insert task after 2 seconds
      setTimeout(() => {
        this.filtersLoaded = Promise.resolve(true);
        this.sort === this.Setting.ASC ? this.tasks.push(obj) : this.tasks.unshift(obj);
      }, 2000);
      // clear input fields
      this.formValues.resetForm();
    }
  }

  orderBy(condition) {
    switch (condition) {
      case this.Setting.ASC:
        this.tasks.sort((a, b) => {
          return a.id > b.id ? 1 : -1
        })
        this.sort = this.Setting.ASC;
        break;
      case this.Setting.DESC:
        this.tasks.sort((a, b) => {
          return a.id < b.id ? 1 : -1
        })
        this.sort = this.Setting.DESC;
        break;
    }
  }

  changeUsername(event) {
    console.log(event)
  }

}
