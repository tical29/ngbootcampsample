import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  deleteTask(task) {
    this.taskService.delete(task);
  }

}
