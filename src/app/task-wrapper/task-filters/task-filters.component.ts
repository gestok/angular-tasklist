import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();

  ngOnInit(): void {
    this.updateFilter('0');
  }

  listFilter: string = '0';

  updateFilter(value: string) {
    this.filter = filters[parseInt(value)];
    this.filterChange.emit(this.filter);
  }
}
