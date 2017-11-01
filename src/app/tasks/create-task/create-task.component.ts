import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TasksService } from '../tasks.service';
import { Task } from '../model/task.model';
import { ITask } from '../task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  pageTitle = 'Create task';
  status = ['todo', 'inprogress', 'completed'];
  modelTask  = new Task('', '', '');
  errorMessage: string;
  task: ITask[] = [];


  constructor(private _taskService: TasksService, private router: Router) { }

  submitForm(form: NgForm) {
    this._taskService.createTask(this.modelTask)
      .subscribe(tasks => {
          this.router.navigate(['/tasks-list']);
        },
        error => this.errorMessage = <any>error);
  }

  ngOnInit() { }

}
