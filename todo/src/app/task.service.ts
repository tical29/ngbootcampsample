import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class TaskService {

  tasks: string[] = [];

  add(task: string) {
    this.tasks.push(task);
  }

  delete(task: string) {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
  }

}
