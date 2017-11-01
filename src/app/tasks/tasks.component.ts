import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { ITask } from './task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  pageTitle = 'Tasks List';
  errorMessage: string;
  tasks: ITask[] = [];

  constructor(private _taskService: TasksService) { }

  ngOnInit() {
    this._taskService.getTasks()
      .subscribe(tasks => {
          this.tasks = tasks;
          console.log(tasks);
        },
        error => this.errorMessage = <any>error);
  }
  deleteTask(id: string) {
    this._taskService.deleteTask(id)
      .subscribe(tasks => {
          this.tasks = tasks;
          console.log(tasks);
        },
        error => this.errorMessage = <any>error);
  }
}
