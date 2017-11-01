import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


import {ITask} from './task';
import {Task} from './model/task.model';

@Injectable()
export class TasksService {

  constructor(private _http: HttpClient) { }

    getTasks(): Observable<ITask[]> {
      return this._http.get<ITask[]>('http://localhost:5000/tasks')
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    getTask(id: string): Observable<ITask> {
      return this._http.get<ITask>('http://localhost:5000/task/' + id)
        .do(data => console.log('Single:' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    createTask(task: Task): Observable<any> {
    return this._http.post('http://localhost:5000/tasks', task, )
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    updateTask(id: string, task: Task): Observable<ITask> {
    return this._http.put('http://localhost:5000/task/' + id, task)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
    }
    deleteTask(id: string): Observable<any> {
      return this._http.delete('http://localhost:5000/task/' + id)
        .do(data => console.log('Delete:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return Observable.throw(errorMessage);
  }

}
