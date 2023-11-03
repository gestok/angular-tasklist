import { Component, Input } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TasklistComponent {
  @Input() tasks: TaskItem[] = [];
}
