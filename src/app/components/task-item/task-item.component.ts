import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TASK } from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = TASK[0];
  faTimes = faTimes;


  constructor() { }

  ngOnInit(): void {
  }

}
