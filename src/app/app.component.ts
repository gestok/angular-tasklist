import { Component } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';

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

  filter: any;
}
