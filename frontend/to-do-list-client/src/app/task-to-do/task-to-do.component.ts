import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskToDo } from '../task-to-do';
import { TaskToDoService } from '../task-to-do.service';

@Component({
  selector: 'app-task-to-do',
  templateUrl: './task-to-do.component.html',
  styleUrls: ['./task-to-do.component.css']
})
export class TaskToDoComponent implements OnInit {
  taskToDoList: TaskToDo[];
  countToDoList :number;
  constructor(private taskToDoService : TaskToDoService, private router :Router) { }

  ngOnInit(): void {
    this.getToDoList();
  }
  getToDoList() {
    this.taskToDoService.getToDoList().subscribe(data => {
      this.taskToDoList=data;
      this.countToDoList = this.taskToDoList.length;
    });
  }

  updateTask(id:number){
    this.router.navigate(['update-toDoTask', id]);
  }

  deleteToDoTask(id: number){
    this.taskToDoService.deleteToDoTask(id).subscribe( data => {
      console.log(data);
      this.getToDoList();
    })
  }
}
