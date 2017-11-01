import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks/tasks.service';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'tasks-list', component: TasksComponent },
      { path: 'create-task', component: CreateTaskComponent },
      { path: 'update-task/:id', component: UpdateTaskComponent },
      { path: '**', redirectTo: 'tasks-list', pathMatch: 'full'}
    ])
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
