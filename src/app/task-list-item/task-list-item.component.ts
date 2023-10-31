import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent {
  @Input() taskText!: string;
  @Input() taskStatus!: boolean;
  @Output() taskStatusChange = new EventEmitter<boolean>();

  toggleTaskStatus() {
    this.taskStatus = !this.taskStatus;
    this.taskStatusChange.emit(this.taskStatus);
  }
}
