import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskItem } from 'src/shared/models/taskItem';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getTasks() {
    let options = this.getStandardOptions();
    return this.http.get('/assets/tasks.json', options);
  }

  private addTask(task: TaskItem) {
    let options = this.getStandardOptions();
    options.headers = options.headers.set(
      'Authorization',
      'value-for-authorization'
    );
    // this.http.post('/assets/tasks.json', body, options);
  }
}
