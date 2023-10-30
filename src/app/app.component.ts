import { Component } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';

const filters = [
  (item: TaskItem) => item,
  (item: TaskItem) => !item.isComplete,
  (item: TaskItem) => item.isComplete,
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items : TaskItem[] = [
    new TaskItem('To Learn Angular'),
    new TaskItem('Get Coffee', true),
    new TaskItem('Go to Super Market')
  ];
  listFilter : string = '0';
  newTaskText = '';
  title = 'angular-tasklist';
  
  get visibleItems() : TaskItem[] {
    return this.items.filter(filters[parseInt(this.listFilter)]);
  }

  addNewTask(){
    this.items.push(new TaskItem(this.newTaskText));
    this.newTaskText = '';
  }

}
