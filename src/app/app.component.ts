import { Component, OnInit } from '@angular/core';
import { TaskItem } from 'src/shared/models/taskItem';
import { EventService } from 'src/shared/services/EventService';
import { TasksService } from './task-wrapper/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
