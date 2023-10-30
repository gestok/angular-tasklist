import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';

const filters = [
  (item: TaskItem) => item,
  (item: TaskItem) => !item.isComplete,
  (item: TaskItem) => item.isComplete,
];

@Component({
  selector: 'task-filters',
  templateUrl: './task-filters.component.html',
  styleUrls: ['./task-filters.component.scss'],
})
export class TaskFiltersComponent {
  @Output() filter = new EventEmitter<any>();

  ngOnInit(): void {
    this.changeFilter('0');
  }

  listFilter: string = '0';

  changeFilter(value: string) {
    this.filter.emit(filters[parseInt(value)]);
  }
}
