import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TasklistComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskFiltersComponent } from './task-filters/task-filters.component';
import { TaskListItemComponent } from './task-list-item/task-list-item.component';

@NgModule({
  declarations: [
    TasklistComponent,
    AddTaskComponent,
    TaskFiltersComponent,
    TaskListItemComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    TasklistComponent,
    AddTaskComponent,
    TaskFiltersComponent,
    TaskListItemComponent,
  ],
})
export class TaskWrapperModule {}
