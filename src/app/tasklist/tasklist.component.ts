import { Component, Input } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  @Input() tasks : TaskItem[] = [];
  toggleItem(item: any){
    item.isComplete = !item.isComplete;
  }
}
