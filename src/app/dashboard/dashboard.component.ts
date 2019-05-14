import { Component, OnInit, ViewChild  } from '@angular/core';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  filtersLoaded: Promise<boolean>;
  tasksModel = new Tasks();
  @ViewChild('tasksForm') formValues;

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

  constructor() { }

  ngOnInit() {
    this.filtersLoaded = Promise.resolve(true);
  }

  onTasksClick(id) {
    let tasksObj = this.tasks.find(o => o.id === id);
    let index = this.tasks.indexOf(tasksObj);
    this.tasks.splice(index, 1);
  }

  onTasksSubmit() {
    const obj = {
      id: this.tasks.length,
      title: this.tasksModel.title,
      description: this.tasksModel.description
    }

    //activate loader 
    this.filtersLoaded = Promise.resolve(false);
    
    // de-activate loader and insert task after 2 seconds
    setTimeout(() => {
      this.filtersLoaded = Promise.resolve(true);
      this.tasks.unshift(obj);
    }, 2000);

    // clear input fields
    this.formValues.resetForm();
  }

}
