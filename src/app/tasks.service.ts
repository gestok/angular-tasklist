import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { TaskItem } from 'src/shared/models/taskItem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log(
        'There is an issue with the client or network:\n',
        error.error
      );
    } else {
      console.log('Server-side error:\n', error.error);
    }

    return throwError(
      () => new Error('Cannot retrieve tasks from the server.')
    );
  }

  getTasks() {
    let options = this.getStandardOptions();
    return this.http
      .get('/assets/tasks.json', options)
      .pipe(catchError(this.handleError));
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
