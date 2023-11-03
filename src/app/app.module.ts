import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskFiltersComponent } from './task-filters/task-filters.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    AddTaskComponent,
    TaskFiltersComponent,
    TaskListItemComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
