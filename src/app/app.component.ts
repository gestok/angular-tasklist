import { Component } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';
import EventService from 'src/shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: TaskItem[] = [
    new TaskItem('To Learn Angular'),
    new TaskItem('Get Coffee', true),
    new TaskItem('Go to Super Market'),
  ];

  constructor() {
    EventService.listen('removeTask', (task: any) => {
      let index = this.tasks.indexOf(task); // get index of current task
      this.tasks.splice(index, 1); // remove the current task
    });
  }

  filter: any;
}
