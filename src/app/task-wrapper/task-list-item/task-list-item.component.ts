import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';
import { EventService } from 'src/shared/services/EventService';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent {
  @Input() task!: TaskItem;

  constructor(private events: EventService) {}

  get cssClasses() {
    return {
      'strikeout ': this.task.isComplete,
    };
  }

  removeTask() {
    this.events.emit('removeTask', this.task);
  }

  toggleTaskStatus() {
    this.task.isComplete = !this.task.isComplete;
  }
}
