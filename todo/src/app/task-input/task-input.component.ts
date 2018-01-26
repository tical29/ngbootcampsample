import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  enterTask(task) {
    this.taskService.add(task.value);

    task.value = '';
  }

}
