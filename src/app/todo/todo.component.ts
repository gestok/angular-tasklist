import { Component, OnInit } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';
import { EventService } from 'src/shared/services/EventService';
import { TasksService } from './tasks.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasks: TaskItem[] = [];

  constructor(events: EventService, private tasksService: TasksService) {
    events.listen('removeTask', (task: any) => {
      let index = this.tasks.indexOf(task); // get index of current task
      this.tasks.splice(index, 1); // remove the current task
    });
  }

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe(
      (data: any) => {
        this.tasks = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  filter: any;
}
