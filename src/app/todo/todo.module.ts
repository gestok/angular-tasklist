import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TasklistComponent } from '../todo/task-list/task-list.component';
import { AddTaskComponent } from '../todo/add-task/add-task.component';
import { TaskFiltersComponent } from '../todo/task-filters/task-filters.component';
import { TaskListItemComponent } from '../todo/task-list-item/task-list-item.component';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TasklistComponent, AddTaskComponent, TaskFiltersComponent, TaskListItemComponent, TodoComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [TodoComponent],
})
export class TodoModule {}
