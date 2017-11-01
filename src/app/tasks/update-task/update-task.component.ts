import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ITask } from '../task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  status = ['todo', 'inprogress', 'completed'];
  pageTitle = 'Update task';
  errorMessage: string;
  task: ITask;
  id: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _taskService: TasksService) {
  }

  ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this.getTask(this.id);
  }

  getTask(id: string) {
    this._taskService.getTask(id)
      .subscribe( task => {
        this.task = task;
        console.log(task);
      },
        error => this.errorMessage = <any>error);
  }

  submitForm(form: NgForm) {
    console.log(this.task);
    this._taskService.updateTask(this.id, this.task)
      .subscribe(task => {
          this._router.navigate(['/tasks-list']);
        },
        error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/tasks-list']);
  }

}
