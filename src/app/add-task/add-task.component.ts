import { Component, Output, EventEmitter } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  @Output() addTask = new EventEmitter<TaskItem>();
  newTaskText = '';

  addNewTask(){
    this.addTask.emit(new TaskItem(this.newTaskText));
    this.newTaskText = '';
  }
}
